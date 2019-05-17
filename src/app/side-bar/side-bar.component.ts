import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuestionDataService } from '../questiondata.service';
import { Question } from '../question';
import { Router } from '@angular/router';
import { AnswerService } from '../answer.service';

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
    // this.data.getQuestions().subscribe(data => {
    //   this.soal = data;
    // });
    this.soal= this.data.getQuestions();
    this.ans = this.answer.ans;
    // console.log(this.soal);
  }

  @Output() goToQuestion =  new EventEmitter();
  @Output() finish = new EventEmitter();

  numberClicked(numOfQuestion) {
    this.goToQuestion.emit(numOfQuestion);
  }

  finishExam(){
    this.ansdata.setAnswerIdx(this.ansidx);
    this.ansdata.setAnswer(this.ans);
    this.router.navigateByUrl("/result");
  }
} 
