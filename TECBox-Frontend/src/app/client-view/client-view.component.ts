import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor() { }
  
  columnsParent = ["Cedula", "Nombre", "Correo Electrónico", "Casillero", "Teléfono", "Celular", "Dirección de Entrega", "Usuario"];

  dataParent = [
      {
        "Cedula": "456",
        "Nombre": "bob esponja",
        "Correo Electrónico": "bob@gmail.com",
        "Casillero": "123",
        "Teléfono": "24568586",
        "Celular": "85645856",
        "Dirección de Entrega": "Calle Wallaby",
        "Usuario": "bobEsponja123"
      },
      {
        "Cedula": "7876",
        "Nombre": "koko",
        "Correo Electrónico": "koko@gmail.com",
        "Casillero": "124",
        "Teléfono": "24545586",
        "Celular": "85645856",
        "Dirección de Entrega": "TEC",
        "Usuario": "koko123"
      },
      {
        "Cedula": "4856",
        "Nombre": "Arenita",
        "Correo Electrónico": "arena@gmail.com",
        "Casillero": "275",
        "Teléfono": "78788586",
        "Celular": "85645856",
        "Dirección de Entrega": "Uwu",
        "Usuario": "arena123"
      }
    ];


  ngOnInit(): void {
  }

}
