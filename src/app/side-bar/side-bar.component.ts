import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isGoingtoend: boolean= false;

  public timeClasses ={
    "GoingToEnd" : this.isGoingtoend,
    "EarlyStart" : !this.isGoingtoend
  }

  onNotify(){
    this.isGoingtoend= true;
    alert("Cepetan woi");
    console.log(this.isGoingtoend);
  }
  onStart(){

  }
  onFinish(){

  }

} 
