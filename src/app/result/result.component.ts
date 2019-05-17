import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionDataService } from '../questiondata.service';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  // @Input() public ans: Array<boolean>= [];
  public soal: Array<Question>= [];
  public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];
  
  constructor(
    private data: QuestionDataService,
    private ansdata: AnswerService) { }

  ngOnInit() {
    this.soal= this.data.getQuestions();
    console.log(this.soal);
    this.ans = this.ansdata.getAnswer();
    console.log(this.ansdata.getAnswer());
    this.ansidx = this.ansdata.getAnswerIdx();
  }

}
