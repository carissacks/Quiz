import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://uas-pti.firebaseio.com/users.json/');
  }
}
