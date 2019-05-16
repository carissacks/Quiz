import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  public questions: Array<Question>= [];
  public rawQuestions: any;
  private init: boolean= false;
  private url: string = 'https://uas-pti.firebaseio.com/questions.json/';
  constructor(private http: HttpClient) { }

  getRawQuestions(): Observable<Question[]>{
    return this.rawQuestions= this.http.get<Question[]>(this.url)
      .pipe(map(jsonResult => {
        let result= jsonResult;
        for(let eachResult of result){
          eachResult.visited= false;
        }
        return result;
      }));
  }

  randQuestion(){
    this.init= true;  
    console.log("HHAHAHAHAHAA");
    this.getRawQuestions().subscribe(data => {
      this.rawQuestions= data;
        let i= 0;
        while(i<this.rawQuestions.length){
          let a= this.random();
          // console.log(a);
          // console.log(this.rawQuestions[a].visited);
          if (this.rawQuestions[a].visited==false){
            this.rawQuestions[a].visited= true;
            this.questions.push(new Question (this.rawQuestions[a].id, this.rawQuestions[a].question, this.rawQuestions[a].choices));
            i++;
          }
        }
      return this.questions;
    });
  }

  getQuestions(): Array<Question>{
    if(this.init) return this.questions;
    else {
      console.log("init dulu");
      this.randQuestion();
      // console.log(this.questions);
      // console.log(this.questions[0].getSoal());
      return this.questions;
    }
  }

  initialize(){
    this.init= false;
    this.questions=[];
  }



  // getQuestions(): Question[]{
  //   this.getRawQuestions().subscribe(data => {
  //     this.rawQuestions= data;
  //     console.log(this.rawQuestions[0].question);
  //     this.randomQuestion();
  //     console.log("a");
  //   })
  // }

  random(){
    return Math.floor((Math.random() * 15));
  }
}
  // randomQuestion(){
  //   let i= 0;
  //   while(i<this.rawQuestions.length){
  //     let a= this.random();
  //     console.log(a);
  //     if (this.rawQuestions[a].visited==false){
  //       this.soal.push(new Question (this.rawQuestions[a].id, this.rawQuestions[a].question, this.rawQuestion[a].choices));
  //       i++;
  //     }
  //   }
  //   console.log(this.soal);
  // }
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