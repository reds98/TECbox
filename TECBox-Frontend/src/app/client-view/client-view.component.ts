import { Component, OnInit } from '@angular/core';
import { ClientViewService } from 'src/app/client-view/client-view.service'
import { LoginViewService } from "../login-view/login-view.service";
import { Router } from "@angular/router";
import { clientInterface } from './client-interface';
@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private clientService: ClientViewService, private auth:LoginViewService, private router:Router) {

  }
  
  // Attributes
  columnsParent = ["Cedula", "Nombre", "Correo Electrónico", "Casillero", "Teléfono", "Celular", "Dirección de Entrega", "Usuario"];
  
  dataParent = [];

  // Assigns the data received to the dataParent attr
  ngOnInit(): void {
    this.getData();
  }

  salir(){
    this.auth.logout();
    window.location.reload();
    this.router.navigateByUrl("/client-view");
  }

  getData(){
    this.clientService.getClients()
    .subscribe(data => {
      let oldData = localStorage.getItem('tableData');
      this.dataParent = data;
      localStorage.setItem('tableData', JSON.stringify(data));
      if(oldData != localStorage.getItem('tableData')){
        location.reload();
      }
    });
    
  }
}
