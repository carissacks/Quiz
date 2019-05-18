import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { ResultComponent } from './result/result.component';
import { AuthGuard } from './auth.guard';
import { AnswerService } from './answer.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'result', component: ResultComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AnswerService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
