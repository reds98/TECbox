import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginViewService  } from "../login-view/login-view.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth:LoginViewService,private router:Router){

  }
  canActivate(): boolean  {
    console.log("GUARD BABY");

    return this.auth.estaAutenticado();
  }
  canActivateChild(): boolean  {
    
    if (this.auth.estaAutenticado()) {
      console.log(" NO GUARD BABY child");
      return true
    }
    else{
      console.log("GUARD BABY child");
      this.router.navigateByUrl("/login-view");
      return false;
    }

    return this.auth.estaAutenticado();
    
  }
  
}
