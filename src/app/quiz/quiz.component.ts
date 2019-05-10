import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { QuestionDataService } from '../questiondata.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public soal: Array<Question>= [];
  public ans: Array<boolean>= [];
  public showSidebar: boolean= true;
  public idx: number;

  constructor(private data: QuestionDataService, private authService: AuthService, private router: Router) { }
  

  ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
    });

    // for(i=0; i<this.data.size(); i++){
      
    // }
    // console.log(this.soal[0].question);
  }

  changeSidebar(show){
    console.log('A');
    this.showSidebar= show;
    console.log(show);
  }

  addAns(idx, jawaban){
    this.ans[idx] = jawaban;
    console.log('No.'+idx+' = '+this.ans[idx]);
  }
  // public String: option (index: integer){
  //   return index+97;
  // }
}
