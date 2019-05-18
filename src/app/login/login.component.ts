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

  constructor(
    private formBuilder: FormBuilder,
    private data: UserdataService,
    private authService: AuthService, 
    private route: ActivatedRoute,
    private router: Router,
    private qdata: QuestionDataService
  ) { }

  ngOnInit() {    
    //load particle JS
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    // Untuk mendapatkan user yang ada
    this.data.getUser().subscribe(data => {
      this.user = data
    });

    // untuk menggecek apakah loginForm terisi semua atau tidak
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    // reset login status
    this.authService.logout();

    // agar saat di quiz, di klik back di browser hanya tetap di login.html '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // Control untuk login form, getter untuk ambil value dari form
  get formControls() { return this.loginForm.controls; }

  login(){
    this.isSubmitted = true;
    this.error = false;

    // saat login form error / tidak lengkap berhenti disini
    if(this.loginForm.invalid){
      return;
    }

    // funtion login yang nantinya dipanggil di bagian authService 
    this.authService.login(this.formControls.username.value, this.formControls.password.value)
      .pipe(first())
      .subscribe( x => {
        // untuk memanggil local storage yang disimpan di authservice
        var user = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(user);

        //untuk melakukan autentikasi pada username dan password yang mencoba login
        if(user.username == "null" || user.password == "null") {
          // bila login gagal
          this.error = true;
          localStorage.removeItem(user);
        }
        else {
          // bila login berhasil
          // this.qdata.randQuestion();
          this.qdata.initialize();
          this.router.navigateByUrl('/quiz');
        }
        
    });
  }
}
