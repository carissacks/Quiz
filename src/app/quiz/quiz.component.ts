import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionDataService } from '../services/questiondata.service';
import { User } from '../user';
import { Question } from '../question';
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  
  public users: User[] = [];
  public soal: Array<Question>= [];
  public showSidebar: boolean= false;
  public idx: number;
  public isFirst: boolean= false;
  public finish: boolean= false;

  @Input() public ans: Array<boolean>= [];
  public ansidx: Array<number>= [];

  constructor(
    private data: QuestionDataService, 
    private router: Router,
    private ansData: AnswerService
  ) { }  

  ngOnInit() {
    this.soal= this.data.getQuestions();
    // this.userdataService.getUser()
    //   .pipe(first())
    //   .subscribe(users => {
    //     this.users = users;
    // })
  }
  changeSidebar(show){
    this.showSidebar= show;
  }

  addAns(idx, idxjawaban, jawaban){ 
    this.ansidx[idx] = idxjawaban;
    this.ans[idx] = jawaban;
    console.log('No.'+idx+' = '+this.ans[idx]);
  }

  finishExam(){
    var x2 = confirm('Are you sure want to submit?');
    if(x2 == true){
      this.ansData.setAnswerIdx(this.ansidx);
      this.ansData.setAnswer(this.ans);
      let date= new Date();
      let finishTime= date.getTime();
      localStorage.setItem('finishTimeMiliSec', JSON.stringify({time: finishTime}));
      
      this.router.navigateByUrl("/score");
    }
  }
  
}