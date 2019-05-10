import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private url: string = 'https://uas-pti.firebaseio.com/users.json/';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<any>(this.url);
  }
}
