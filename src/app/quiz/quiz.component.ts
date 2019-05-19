import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { QuestionDataService } from '../questiondata.service';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { first } from 'rxjs/operators';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  
  public users: User[] = [];
  public soal: Array<Question>= [];
  public showSidebar: boolean= false;
  public goToQuestion: number;
  public idx: number;
  public isFirst: boolean= false;

  @Input() public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];

  constructor(
    private data: QuestionDataService, 
    private authService: AuthService, 
    private router: Router,
    private userdataService: UserdataService  
  ) { }  

  ngOnInit() {
    this.soal= this.data.getQuestions();
    // console.log(this.soal);
    
    this.userdataService.getUser()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
    })
  }
  changeSidebar(show){
    // console.log('Aku');
    this.showSidebar= show;
    // console.log(show);
  }

  addAns(idx, idxjawaban, jawaban){ 
    this.ansidx[idx] = idxjawaban;
    this.ans[idx] = jawaban;
    console.log('No.'+idx+' = '+this.ans[idx]);
  }
}

    // this.data.getQuestions().subscribe(data => {
    //   this.rawQuestion= data;
    //   console.log(this.rawQuestion[0].question);
    //   this.randomQuestion();
    //   console.log("a");
    // })

    // this.data.getQuestions().subscribe(data => {
    //   this.soal = data
    // });
    // this.soal= this.data.getQuestion();
    // this.data.getData()
    //   .map((question: Array<any>) =>{
    //     let result: Array<any>= [];
    //     if(question){
    //       question.forEach((erg) => {
    //         result.push(new Question(erg.id, erg.question, erg.choices,));
    //       });
    //     }
    //     return result;
    //   });

  // getNumberQuestion(numb){
  // $('#carousel').carousel(numb);
  // }

  // randomQuestion(){
  //   let i= 0;
  //   while(i<this.rawQuestion.length){
  //     let a= this.random();
  //     console.log(a);
  //     if (this.rawQuestion[a].visited==false){
  //       this.soal.push(new Question (this.rawQuestion[a].id, this.rawQuestion[a].question, this.rawQuestion[a].choices));
  //       i++;
  //     }
  //   }
  //   console.log(this.soal);
  // }
  
// }
