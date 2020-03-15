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

  columnsParent = ["Id", "Cliente", "Descripción", "Entrega"];

  dataParent = [
    {
      "ID": "001",
      "Client": "Homero",
      "Description": "Feo",
      "ArrivalDate": "Hoy"
    },
    {    
      "ID": "002",
      "Client": "Maggie",
      "Description": "Bebe",
      "ArrivalDate": "Dos meses"
    },
    {
      "ID": "003",
      "Client": "Bart",
      "Description": "Cool",
      "ArrivalDate": "Ayer"
    }
  ];
  
  ngOnInit(): void {

  }


}
