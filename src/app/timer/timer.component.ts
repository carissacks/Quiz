import { Component, OnInit, Input } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router } from '@angular/router';
import { AnswerService } from '../services/answer.service';
// import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public waktu: number;// Kalo mau edit time, lgsg kasih value di sini. yang this.waktu nya di comment.
  public isGoingtoend: boolean= false;
  @Input() public ans: Array<boolean>= [];
  @Input() public ansidx: Array<number>= [];

  constructor(
    private router: Router,
    private ansdata: AnswerService
    ) { }

  ngOnInit() {

    let loginTime= JSON.parse(localStorage.getItem('loginTimeMiliSec'));
    let currDate= new Date();
    let currTime= currDate.getTime()/1000; // Dari milisecond jadi second
    let timeGiven= 180; //in seconds
    let loginTimeInSecond= (loginTime.time)/1000//Dari milisecond jadi second
    this.waktu= (loginTimeInSecond + timeGiven)-currTime;
  }

  onNotify(){
    this.isGoingtoend= true;
    console.log(this.isGoingtoend);
  }

  onStart(){
    if(this.waktu<60) this.isGoingtoend= true;
  }

  onFinished(){
    this.ansdata.setAnswerIdx(this.ansidx);
    this.ansdata.setAnswer(this.ans);

    let date= new Date();
    let finishTime= date.getTime();
    localStorage.setItem('finishTimeMiliSec', JSON.stringify({time: finishTime}));
    alert("Your time's up. You did your best! Let's see the result.");
    
    this.router.navigateByUrl("/score");
  }
}