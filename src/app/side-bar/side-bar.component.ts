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
 
  public idx: number;
  public index: number;
  public id: number;

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
    // console.log(this.soal);
  }

  numOfQuestion: number;
  @Output() goToQuestion =  new EventEmitter();

  numberClicked(id){
    console.log(id.type());
    this.goToQuestion.emit(this.numOfQuestion);
  }

  finishExam(){
    this.router.navigateByUrl('/result');
  }
} 
