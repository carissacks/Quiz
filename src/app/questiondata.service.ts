import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  private url: string= 'https://uas-pti.firebaseio.com/questions.json/';
  constructor(private http: HttpClient) { }

  getQuestion(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url);
  }
}