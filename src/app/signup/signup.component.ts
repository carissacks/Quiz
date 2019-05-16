import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserdataService } from '../userdata.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { User } from '../user';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userDataService: UserdataService
    // private angularFire: AngularFireModule 
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fname: ['', Validators.required],
      gender: ['',Validators.required],
      lname: ['', Validators.required],
      nim: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})')]]
    });
  }

  get formControls() { return this.signupForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }
    
    // this.authService.signup(this.formControls.fname.value, this.formControls.gender.value, this.formControls.lname.value, 
    //   this.formControls.nim.value, this.formControls.username.value, this.formControls.password.value)
    //         .pipe(first())
    //         .subscribe( x => {
    //           // console.log(x);
    //           this.router.navigateByUrl('/login');
    //         }); 
  }
}