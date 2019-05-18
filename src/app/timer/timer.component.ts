import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router } from '@angular/router';
// import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public waktu: number;// Kalo mau edit time, lgsg kasih value di sini. yang this.waktu nya di comment.
  public isGoingtoend: boolean= false;

  constructor(
    // private ansdata: AnswerService    
    private router: Router
    ) { }

  ngOnInit() {
    // console.log("nyala");
    let loginTime= JSON.parse(localStorage.getItem('loginTimeMiliSec'));
    let currDate= new Date();
    let currTime= currDate.getTime()/1000; // Dari milisecond jadi second
    let timeGiven= 300; //in seconds
    let loginTimeInSecond= (loginTime.time)/1000//Dari milisecond jadi second
    this.waktu= (loginTimeInSecond + timeGiven)-currTime;
  }

  // public timeClasses ={
  //   "GoingToEnd" : this.isGoingtoend,
  //   "EarlyStart" : !this.isGoingtoend
  // }

  onNotify(){
    this.isGoingtoend= true;
    // alert("Cepetan woi");
    console.log(this.isGoingtoend);
  }

  onStart(){

  }
  onFinished(){
    // console.log("aaa");
    alert("udah kelar woi. login lagi lah.");
    this.router.navigateByUrl("/result");
  }
}
