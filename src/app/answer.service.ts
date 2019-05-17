import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AnswerService {
  constructor() { }
  private userans = new BehaviorSubject<Array<boolean>>(false);
  private useransidx = new BehaviorSubject<Array<number>>(0);
  public ans = Array<boolean>();
  public ansidx = Array<number>();
  
  setAnswer(ans: Array<boolean>){
    this.userans.next(ans);
    console.log(ans);
    this.ans = ans;
  }

  setAnswerIdx(ansidx: Array<number>){
    this.useransidx.next(ansidx);
    console.log(ansidx);
    this.ansidx = ansidx;
  }

  getAnswer(){
    console.log("Answer: "+this.ans);
    return this.ans;
  }

  getAnswerIdx(){
    return this.ansidx;
  }


}
