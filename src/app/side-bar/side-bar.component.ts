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

  constructor(
    private data: QuestionDataService,
    private answer: QuizComponent) {}
    
  ngOnInit() {
    // this.data.getQuestions().subscribe(data => {
    //   this.soal = data;
    // });
    this.soal= this.data.getQuestions();
    this.ans = this.answer.ans;   
    // console.log(this.soal);
  }
}