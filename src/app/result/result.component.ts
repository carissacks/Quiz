import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionDataService } from '../questiondata.service';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  // @Input() public ans: Array<boolean>= [];
  public soal: Array<Question>= [];
  public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];
  public score: number;

  constructor(
    private data: QuestionDataService,
    private ansdata: AnswerService) { }
    // public choiceResultClasses= {
    //   "{ 'col-md-12 p-2 mb-2 ml-2 alert alert-success' : 'col-md-12 p-2 mb-2 ml-2 alert'""
    // }
  ngOnInit() {
    this.soal= this.data.getQuestions();
    console.log(this.soal);
    this.ans = this.ansdata.getAnswer();
    console.log(this.ansdata.getAnswer());
    this.ansidx = this.ansdata.getAnswerIdx();

    this.score = 0;
    for(let i = 0; i < this.ans.length; i++){
      if(this.ans[i]) this.score++;
    }
    this.score = this.score*1.0/this.soal.length*100;
  }

  resultClass(value: boolean, idxQues: number, idxAns: number){
    if(value) return 'alert alert-success col-md-12 p-2 mb-2 ml-2';
    else if(this.ansidx[idxQues]== idxAns )return 'alert alert-danger col-md-12 p-2 mb-2 ml-2';
    else return 'choice col-md-12 p-2 mb-2 ml-2';
  }
}
