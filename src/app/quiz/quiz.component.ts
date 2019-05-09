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

  constructor(private data: QuestionDataService, private authService: AuthService, private router: Router) { }
    ans: Array<boolean>= [];

  ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
    });

    // for(i=0; i<this.data.size(); i++){
      
    // }
    // console.log(this.soal[0].question);
  }
  //   ngOnInit(){
  //     this.data.getQuestion().subscribe(data => {
  //       this.soal = data
  //     });
  //     console.log(this.soal)
  // }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  // public String: option (index: integer){
  //   return index+97;
  // }
}