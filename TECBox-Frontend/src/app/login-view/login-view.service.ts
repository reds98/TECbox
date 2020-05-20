import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../login-view/usuario.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginViewService {

  private Api_Key="AIzaSyAX4qeOGDw_3eHd16lDsZAH-bnKc-TJugE"
  private url="https://identitytoolkit.googleapis.com/v1/accounts:"
  userToken:string ;

  //Link para hacer login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  //Link para hcaer Sign Up
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.leerToken();
  }
  logout(){
    localStorage.removeItem("token");
    
  }
  login(usuario : UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.Api_Key }`,
      authData
    ).pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );


  }
  private guardarToken( idToken: string ) {

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString() );


  }
  leerToken() {

    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

  }
  estaAutenticado():boolean{
    return this.userToken.length > 2;
  }

}
