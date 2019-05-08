import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

    soal: Object;
    constructor(private data: DataService, private authService: AuthService, private router: Router) { }
  
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