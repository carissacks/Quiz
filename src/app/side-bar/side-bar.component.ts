import { Component, OnInit, Input } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuestionDataService } from '../questiondata.service';
import { Question } from '../question';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {
  public soal: Array<Question>= [];
  @Input() public ans: Array<boolean>= [];
  public idx: number;
  public index: number;

  constructor(private data: QuestionDataService, private answer: QuizComponent) { }

  sidebarStart: string = '<div class="row align-items-center justify-content-center">START SIDEBAR</div>'
  falseAns: string = '<button type="button" class="btn btn-danger col-1 col-md-2 m-2">{{ idx }}</button>';
  trueAns: string = '<button type="button" class="btn btn-success col-1 col-md-2 m-2">{{ idx }}</button>';
  noAns: string = '<button type="button" class="btn btn col-1 col-md m-2>{{ idx }} </button>';

  ngOnInit() {
    this.data.getQuestions().subscribe(data => {
      this.soal = data;
    });
    // this.soal= this.data.getQuestion();
    this.ans = this.answer.ans;   
    // console.log(this.soal);
  }
  
  dispBtn(){
    for(this.idx = 0; this.idx < this.ans.length; this.idx++){
      if(this.ans[this.idx] == null) this.sidebarStart = this.sidebarStart + this.noAns;
      else if(this.ans[this.idx] == true) this.sidebarStart = this.sidebarStart + this.trueAns;
      else if(this.ans[this.idx] == false) this.sidebarStart = this.sidebarStart + this.falseAns;
    }
  }
} 
