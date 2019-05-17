import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionDataService } from '../questiondata.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  // @Input() public ans: Array<boolean>= [];
  public soal: Array<Question>= [];
  
  constructor(
    private data: QuestionDataService, 
  ) { }

  ngOnInit() {
    this.soal= this.data.getQuestions();
    console.log(this.soal);
  }

}
