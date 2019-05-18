import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  // untuk memanggil local storage yang berisi currrent user / user yang sedang menjalani quiz
  public user = JSON.parse(localStorage.getItem('currentUser'));
  //pendeklarasian yang nantinya akan digunakan di html
  public nama =  this.user.fName + " " + this.user.lName;
  public nim = this.user.nim;
  @Output() showSidebarChange = new EventEmitter();
  public showSidebar:boolean= true;
  public showSidebarButton: boolean= true;
  
  constructor(private authService: AuthService, private router: Router) { }

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
