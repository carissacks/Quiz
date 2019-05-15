import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { QuestionDataService } from '../questiondata.service';
import { Question } from '../question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {
  public soal: Array<Question>= [];
  @Input() public ans: Array<boolean>= [];
  @Output() public outans: Array<boolean>=[];
  public idx: number;
  public index: number;
  public numOfQuestion: number;

  constructor(
    private data: QuestionDataService,
    private answer: QuizComponent,
    private router: Router) {}
    
  ngOnInit() {
    // this.data.getQuestions().subscribe(data => {
    //   this.soal = data;
    // });
    this.soal= this.data.getQuestions();
    this.ans = this.answer.ans;
    this.outans = this.answer.ans;
    // console.log(this.soal);
  }

  @Output() goToQuestion =  new EventEmitter();
  @Output() finish = new EventEmitter();

  numberClicked(numOfQuestion) {
    this.goToQuestion.emit(numOfQuestion);
  }

  finishExam(){
    this.finish.emit(this.outans);
    this.router.navigateByUrl("/result");
  }
} 
