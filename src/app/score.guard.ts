import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
      var time = localStorage.getItem('finishTimeMiliSec');
      console.log("haii"+time);
      
      if(time){
        this.router.navigate(['/score'], { queryParams: {} });
        return false;
      }
      return true;
  }

}
