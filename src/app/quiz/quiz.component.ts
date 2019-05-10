import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { QuestionDataService } from '../questiondata.service';
import { Question } from '../question';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  users: User[] = [];
  public soal: Array<Question>= [];

  @Input() public ans: Array<boolean>= [];
  public showSidebar: boolean= true;
  public idx: number;

  public isFirst: boolean= false;
  public carouselProp={
    "carousel-item": true,
    "active": this.isFirst
  }
  constructor(
    private data: QuestionDataService, 
    private authService: AuthService, 
    private router: Router,
    private userdataService: UserdataService  
  ) { }  

  ngOnInit() {
    this.data.getQuestion().subscribe(data => {
      this.soal = data
    });

    this.userdataService.getUser()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
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

  getQuestion(){
    
  }
}
