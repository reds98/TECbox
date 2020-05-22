import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../login-view/usuario.model';
import { NgForm } from '@angular/forms';
import { LoginViewService } from '../login-view/login-view.service';
import Swal from 'sweetalert2'
import { Router } from "@angular/router";


@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: LoginViewService,private router:Router) {

   }
   ngOnInit(): void {
     if(localStorage.getItem("email")){
       this.usuario.email=localStorage.getItem("email");
       this.recordarme=true;
     }
    
  }

  login(form:NgForm){
    if (form.invalid) {return;}
    Swal.fire({
      allowOutsideClick:false,
      icon: 'info',
      text: 'Espere por favor',
     })
     Swal.showLoading();
    
     
      
      console.log(this.usuario);
      this.auth.login(this.usuario).subscribe(resp => {
        console.log(resp);
        Swal.close();
        if(this.recordarme){
          localStorage.setItem("email",this.usuario.email);
        }
        this.router.navigateByUrl("/client-view");
        

      },
      (err)=>{
        Swal.fire({

          icon: 'error',
          title: 'Error al autenticar',
          text:err.error.error.message
         })
        console.log(err.error.error.message);
      })
    
    
    console.log(form);
  }


}
