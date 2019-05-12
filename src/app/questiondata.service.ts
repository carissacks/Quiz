import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionDataService {

  public questions: Array<Question>= [];
  private url: string = 'https://uas-pti.firebaseio.com/questions.json/';
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url);
  }

  // getData(): Observable<Question[]>{
  //   return this.http.get<Question[]>(this.url);
  // }

//   private source: any;
//   public data: Array<Question>= [];
//   // getQuestion(): Observable<Question[]>{
//   //   return this.http.get<Question[]>(this.url);
//   // }

// init() {
//   this.source.getData().subscribe(source => {
//     this.data = source
//   });

//   for( let a in this.data){
//     this.questions.push({
//       id: this.data[a].id,
//       question:  this.data[a].question,
//       choices:  this.data[a].choices,
//       visited: false,
//       answered: false
//     })
//   };
// }

//   getQuestion(): Array<Question>{
//     this.init();
//     console.log("SSSS" + this.source);
//     return this.questions;
//   }
}