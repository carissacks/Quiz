import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionDataService } from '../services/questiondata.service';
import { AnswerService } from '../services/answer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  public soal: Array<Question>= [];
  public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];
  public score: number;
  public roundedScore: string;

  constructor(
    private data: QuestionDataService,
    private ansdata: AnswerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.soal= this.data.getQuestions();
    this.ans = this.ansdata.getAnswer();
    this.ansidx = this.ansdata.getAnswerIdx();

    this.score = 0;
    for(let i = 0; i < this.ans.length; i++){
      if(this.ans[i]) this.score++;
    }
    this.score = this.score*1.0/this.soal.length*100;
    this.roundedScore= this.score.toFixed(2);
  }

  resultClass(value: boolean, idxQues: number, idxAns: number){
    if(value) return 'true choice col-md-12 p-2 mb-3 ml-2'; //kalo jawabannya yang ini, classnya ini.
    else if(this.ansidx[idxQues]== idxAns )return 'wrong choice col-md-12 p-2 mb-3 ml-2';//kalo jawabannya bukan ini, tapi user jawab yang ini.
    else return 'choice col-md-12 p-2 mb-3 ml-2';//kalo bukan jawaban yg bener dan gak dijawab user.
  }
}
