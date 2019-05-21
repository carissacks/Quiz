import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  // untuk memanggil local storage yang berisi currrent user / user yang sedang menjalani quiz
  public user = JSON.parse(localStorage.getItem('currentUser'));
  //pendeklarasian yang nantinya akan digunakan di html
  public nama =  this.user.fName + " " + this.user.lName;
  public nim = this.user.nim;
  public showSidebarButton: boolean;
  public showSidebar:boolean= false;
  //untuk kasih tau sidebarnya harus di show atau di hide ke quiz component
  @Output() showSidebarChange = new EventEmitter();

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //kalo bukan page quiz, gak ada button sidebarnya.
    let path= this.route.snapshot.routeConfig;
    if(path.path=="quiz") this.showSidebarButton= true;
    else this.showSidebarButton= false;
  }

  sidebarClicked(){
    this.showSidebar=!this.showSidebar;
    this.showSidebarChange.emit(this.showSidebar);
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
