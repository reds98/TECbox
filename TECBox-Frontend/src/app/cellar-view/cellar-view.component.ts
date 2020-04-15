import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cellar-view',
  templateUrl: './cellar-view.component.html',
  styleUrls: ['./cellar-view.component.css']
})
export class CellarViewComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  columnsParent = ["ID", "Cliente", "Descripción", "Fecha de Entrega"];

  dataParent = [
    {
      "ID": "001",
      "Cliente": "Homero",
      "Descripción": "Feo",
      "Fecha de Entrega": "Hoy"
    },
    {    
      "ID": "002",
      "Cliente": "Maggie",
      "Descripción": "Bebe",
      "Fecha de Entrega": "Dos meses"
    },
    {
      "ID": "003",
      "Cliente": "Bart",
      "Descripción": "Cool",
      "Fecha de Entrega": "Ayer"
    }
  ];
  
  ngOnInit(): void {

  }


}
