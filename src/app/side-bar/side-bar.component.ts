import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuestionDataService } from '../services/questiondata.service';
import { Question } from '../question';
import { Router } from '@angular/router';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {
  public soal: Array<Question>= [];
  @Input() public ans: Array<boolean>= [];
  @Input() public ansidx: Array<number>= [];
  public idx: number;
  public index: number;
  public numOfQuestion: number;

  constructor(
    private data: QuestionDataService,
    private answer: QuizComponent,
    private router: Router,
    private ansdata: AnswerService) {}
    
  ngOnInit() {
    providers: [AnswerService];
    this.soal= this.data.getQuestions();
    this.ans = this.answer.ans;
  }

  finishExam(){
    var x2 = confirm('Are you sure want to submit?');
    if(x2 == true){
      this.ansdata.setAnswerIdx(this.ansidx);
      this.ansdata.setAnswer(this.ans);
      let date= new Date();
      let finishTime= date.getTime();
      localStorage.setItem('finishTimeMiliSec', JSON.stringify({time: finishTime}));
      
      this.router.navigateByUrl("/score");
    }
  }
  
} 
