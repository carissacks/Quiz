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
  public minUsed: string;
  public secUsed: string;

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
    this.roundedScore= this.score.toFixed(2); //pembulatan ke atas

    let startTime= JSON.parse(localStorage.getItem('loginTimeMiliSec'));
    let endTime= JSON.parse(localStorage.getItem('finishTimeMiliSec'));
    let timeUsedinSec= (endTime.time/1000)- (startTime.time/1000);
    this.minUsed= this.toFixed((timeUsedinSec / 60),0);
    this.secUsed= this.toFixed((timeUsedinSec % 60),0);
    // console.log(this.secUsed);
  }

  seeResult() {
    this.router.navigateByUrl("/result");
  }

  //agar tidak ada pembulatan.
  toFixed(number: number, fixed: number) {
    var term = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return number.toString().match(term)[0];
}

}
