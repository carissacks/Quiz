import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  flag = false;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private userList: AngularFireList<any>;

  constructor(
    private http: HttpClient, 
    private firebase: AngularFireDatabase
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.userList=this.firebase.list<any>('userObj');
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<User[]> {
    return this.http.get<any>(`https://uas-pti.firebaseio.com/userObj.json`)
        .pipe(map(user => {
          for (var i in user) {
                // console.log(user[i].fName);
                if (username === user[i].username && password === user[i].password) {
                  // flag digunakan untuk menandakan bahwa username dan password sudah terdaftar
                  this.flag = true;
                  // local storage untuk menyimpan siapa yang ada dalam quiz. Digunakan untuk menampilkan nama dan nimnya pada header juga
                  localStorage.setItem('currentUser', JSON.stringify(user[i]));
                  this.currentUserSubject.next(user[i]);
                  this.setTime();
            }
      }
        if (this.flag === false) {
            localStorage.setItem('currentUser', JSON.stringify({username: "null", password: "null"}));
          }
          return user;
        }));
  }

  logout() {
      // log out untuk menghapus waktu dan current user yang ada dalam quiz dari local storage
      localStorage.removeItem('currentUser');
      localStorage.removeItem('loginTimeMiliSec');
      this.currentUserSubject.next(null);
  }

  setTime(){
    let date= new Date();
    let time= date.getTime();
    let hour= date.getHours();
    let minute= date.getMinutes();
    let second= date.getSeconds();
    localStorage.setItem('loginTimeMiliSec', JSON.stringify({time: time}));
    // console.log("time " + time);
    // console.log("hour "+hour);
    // console.log("minute " + minute);
    // console.log("sec "+second);
  }

  signup(user: User){
    this.userList.push(user);
  }

}
