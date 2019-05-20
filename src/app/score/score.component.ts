import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionDataService } from '../services/questiondata.service';
import { AnswerService } from '../services/answer.service';
import { Question } from '../question';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent implements OnInit {
  public score: number;
  public roundedScore: string;
  public soal: Array<Question>= [];
  public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];

  constructor(
    private router: Router,
    private data: QuestionDataService,
    private ansdata: AnswerService
  ) { }

  ngOnInit() {
    this.soal= this.data.getQuestions();
    this.ans = this.ansdata.getAnswer();
    this.ansidx = this.ansdata.getAnswerIdx();

    this.score= 0;
    for(let i = 0; i < this.ans.length; i++){
      if(this.ans[i]) this.score++;
    }
    this.score = this.score*1.0/this.soal.length*100;
    this.roundedScore= this.score.toFixed(2);
  }

  seeResult() {
    // this.ansdata.setAnswerIdx(this.ansidx);
    // this.ansdata.setAnswer(this.ans);
    this.router.navigateByUrl("/result");
  }

}
