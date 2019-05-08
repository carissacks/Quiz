import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from '../questiondata.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    soal: Object;
    constructor(private data: QuestionDataService) { }
  ans: boolean[15];
  
   ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
    })
  }
}