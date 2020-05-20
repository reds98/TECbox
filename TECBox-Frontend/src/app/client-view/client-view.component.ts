import { Component, OnInit } from '@angular/core';
import { ClientViewService } from 'src/app/client-view/client-view.service'
import { LoginViewService } from "../login-view/login-view.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private clientService: ClientViewService,private auth:LoginViewService,private router:Router) {
  }
  
  // Attributes
  columnsParent = ["Cedula", "Nombre", "Correo Electrónico", "Casillero", "Teléfono", "Celular", "Dirección de Entrega", "Usuario"];
  
  dataParent;

  // Assigns the data received to the dataParent attr
  ngOnInit(): void {
    this.clientService.getClients()
    .subscribe(data => this.dataParent = data);
    console.log(this.dataParent);
  }
  salir(){
    this.auth.logout();
    window.location.reload();
    this.router.navigateByUrl("/client-view");
  }

}
