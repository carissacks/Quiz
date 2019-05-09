import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,private authService: AuthService) { }

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
    console.log("test");
    this.isSubmitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

  }
}