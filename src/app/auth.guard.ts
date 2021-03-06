import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators";
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router,private user: UserService){}
//  add the user service 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggedIn) {
        return true
      }
      return this.user.isLoggedIn().pipe(map(res =>{
        if(res.status){
        this.auth.setLoggedIn(true)
        return true;
      } else {
        this.router.navigate(['login'])
        return false;
      }
      }));
      // if(!this.auth.isLoggedIn){
      //   // we might be logged in , need to check with the server

      //   this.router.navigate(['login']);
      // }
      // return this.auth.isLoggedIn; // acts as a property name but is a function
    }
}
