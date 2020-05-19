import { Component, OnInit } from '@angular/core';
import { ClientViewService } from 'src/app/client-view/client-view.service'


@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor(private clientService: ClientViewService) {
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

}
