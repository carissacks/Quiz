import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

declare var particlesJS: any;

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
  ) { }

  ngOnInit() {

    //load particle JS
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
    
    this.signupForm = this.formBuilder.group({
      fName: ['', Validators.required],
      gender: ['',Validators.required],
      lName: ['', Validators.required],
      nim: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})')]] 
      // untuk pattern password, d untuk adanya minimal 1 angka, [a-z] untuk adanya minimal 1 huruf kecil, [A-Z] untuk adanya minimal 1 huruf besar, {8,} maksudnya adalah minimal 8 karakter
    });
  }

  // Control untuk signup form, getter untuk ambil value dari form
  get formControls() { return this.signupForm.controls; }

  onSubmit() {
    this.isSubmitted = true;

    // Bila tidak valid maka akan berhenti disini
    if (this.signupForm.invalid) {
        return;
    }

    // Untuk melanjutkan signup di authService
    this.authService.signup(this.signupForm.value);

    alert('Data telah tersimpan');

    // Setelah sign up berhasil maka akan teralihkan ke bagian login
    this.router.navigateByUrl('/login');
  }
}