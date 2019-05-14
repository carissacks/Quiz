import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // let userloggedin = localStorage.getItem('currentUser');
  constructor(private authService: AuthService, private router: Router) { }
  user = JSON.parse(localStorage.getItem('currentUser'));
  nama =  this.user.fName + " " + this.user.lName;
  nim = this.user.nim;

  ngOnInit() {
  }

  @Output() showSidebarChange = new EventEmitter();
  showSidebar:boolean= true;

  sidebarClicked(){
    if (this.showSidebar==true) this.showSidebar=false;
    else this.showSidebar= true;
    console.log(this.showSidebar);

    this.showSidebarChange.emit(this.showSidebar);
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
