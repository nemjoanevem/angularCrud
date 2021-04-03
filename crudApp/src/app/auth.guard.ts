import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { user } from './dataObj';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}') as user;

      if(user.name === "admin" && user.password === "admin"){
        return true
      }
      else{
        this._router.navigate(['login']);
        return false;
      }
  }
  
}
