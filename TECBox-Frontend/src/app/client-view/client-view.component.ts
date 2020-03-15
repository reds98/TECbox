import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  constructor() { }
  
  columnsParent = ["Cédula", "Nombre", "Correo Electrónico", "Casillero", "Teléfono", "Celular", "Dirección de Entrega", "Usuario"];

  dataParent = [
      {
        "numero_cedula": "456",
        "nombre_completo": "bob esponja",
        "correo": "bob@gmail.com",
        "casillero": "123",
        "telefono_casa": "24568586",
        "celular": "85645856",
        "direccion_entrega": "Calle Wallaby",
        "usuario": "bobEsponja123"
      },
      {
        "numero_cedula": "7876",
        "nombre_completo": "koko",
        "correo": "koko@gmail.com",
        "casillero": "124",
        "telefono_casa": "24545586",
        "celular": "85645856",
        "direccion_entrega": "TEC",
        "usuario": "koko123"
      },
      {
        "numero_cedula": "4856",
        "nombre_completo": "Arenita",
        "correo": "arena@gmail.com",
        "casillero": "275",
        "telefono_casa": "78788586",
        "celular": "85645856",
        "direccion_entrega": "Uwu",
        "usuario": "arena123"
      }
    ];


  ngOnInit(): void {
  }

}
