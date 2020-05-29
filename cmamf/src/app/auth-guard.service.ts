import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService , private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
 let returnedValue= this.authService.isAuthenticated()
 console.log('returned value in service :',returnedValue)
 if(returnedValue){
   return true;
 }
 else{
   alert('Not alowed , Login first!!!')
  this.router.navigate(['']);
 }

  }
}
