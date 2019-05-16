import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("nyala");
  }

  public isGoingtoend: boolean= false;

  public timeClasses ={
    "GoingToEnd" : this.isGoingtoend,
    "EarlyStart" : !this.isGoingtoend
  }

  onNotify(){
    this.isGoingtoend= true;
    // alert("Cepetan woi");
    console.log(this.isGoingtoend);
  }
  onStart(){

  }
  onFinish(){

  }

  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}
