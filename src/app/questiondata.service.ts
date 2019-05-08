import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  constructor(private http: HttpClient) { }

  getQuestion(){
    return this.http.get('https://uas-pti.firebaseio.com/questions.json/');
  }
}
