import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    soal: Object;
    constructor(private data: DataService) { }
  
   
  
   ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
      console.log(this.soal)
    })
  }
}