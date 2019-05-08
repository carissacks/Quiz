import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { QuestionDataService } from '../questiondata.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  soal: Object;
  constructor(private data: QuestionDataService, private authService: AuthService, private router: Router) { }
  // ans: boolean[15];
  
   ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}