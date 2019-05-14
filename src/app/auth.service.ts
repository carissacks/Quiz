import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  } 

  login(username: string, password: string): Observable<User[]> {
    return this.http.get<any>(`https://uas-pti.firebaseio.com/users.json`) 
        .pipe(map(user => {
            console.log("ini user 1" + user[1]);
            for(let i = 0;i < user.length;i++){
              if (username == user[i].username && password == user[i].password) {
                  this.flag = true;
                  // store user details in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user[i]));
                  this.currentUserSubject.next(user[i]);
                  // user = JSON.parse(localStorage.getItem('currentUser'));
                  // console.log(user);
              }
            }

            if(this.flag == false) {
              localStorage.setItem('currentUser', JSON.stringify({username: "null", password: "null"}));
            }

            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

signup(fName: string, gender: string, lName: string, nim: string, username: string, password: string): Observable<User[]>{
  return this.http.post<User[]>(`https://uas-pti.firebaseio.com/users.json`, { fName, gender, lName, nim, password, username }) //kalo mau masukin k json pke post return this.http.get<any>(`https://uas-pti.firebaseio.com/users.json`, { id, fname, gender, lname, nim, password, username })
        .pipe(map(user => {
          console.log(user);

            return user;
          }));
}

}
