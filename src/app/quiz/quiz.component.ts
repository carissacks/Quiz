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
  public users: User[] = [];
  public soal: Array<Question>= [];
  public soals: Array<Question>= [];
  public showSidebar: boolean= true;
  public idx: number;
  public isFirst: boolean= false;
  public carouselProp={
    "carousel-item": true,
    "active": this.isFirst
  }
  @Input() public ans: Array<boolean>= [];

  constructor(
    private data: QuestionDataService, 
    private authService: AuthService, 
    private router: Router,
    private userdataService: UserdataService  
  ) { }  

  ngOnInit() {
    this.data.getQuestions().subscribe(data => {
      this.soal= data
    })

    console.log(this.soal);

    this.userdataService.getUser()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
    })

    for(let i of this.soal){
      this.addQuestion(i);
    }
    // this.data.getQuestions().subscribe(data => {
    //   this.soal = data
    // });
    // this.soal= this.data.getQuestion();
    // this.data.getData()
    //   .map((soal: Array<any>) =>{
    //     let result: Array<any>= [];
    //     if(soal){
    //       soal.forEach((erg) => {
    //         result.push(new Question(erg.id, erg.question, erg.choices,));
    //       });
    //     }
    //     return result;
    //   });
  }
  
  addQuestion(item){
    this.soals.push(item);
    console.log("AAA"+this.soals);
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

}
