import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router, ActivatedRoute } from  '@angular/router';
import { UserdataService } from '../userdata.service';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { first } from 'rxjs/operators';
import { QuestionDataService } from '../questiondata.service';

declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  returnUrl: string;
  error = false;
  user: User[];
  // currentUser = Object;
  constructor(
    private formBuilder: FormBuilder,
    private data: UserdataService,
    private authService: AuthService, 
    private route: ActivatedRoute,
    private router: Router,
    private qdata: QuestionDataService
  ) { }

  ngOnInit() {    
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    this.data.getUser().subscribe(data => {
      this.user = data
    });

    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    // console.log(this.loginForm.value);
    this.isSubmitted = true;
    this.error = false;
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.formControls.username.value, this.formControls.password.value)
            .pipe(first())
            .subscribe( x => {
              var user = JSON.parse(localStorage.getItem('currentUser'));
              console.log(user);
              if(user.username == "null" || user.password == "null"){
                this.error = true;
                localStorage.removeItem(user);
              }else {
                this.qdata.randQuestion();
                this.router.navigateByUrl('/quiz');
              }
            });
  }
  
}
