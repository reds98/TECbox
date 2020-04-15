import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-cellar-view',
  templateUrl: './cellar-view.component.html',
  styleUrls: ['./cellar-view.component.css']
})
export class CellarViewComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  columnsParent = ["ID", "Cliente", "Descripción", "Fecha de Entrega"];
  consultationRequest = false;
  isNumber = true;
  state;
  userForm = new FormGroup({
    TrackingID: new FormControl()
    });

  objectValues = Object.values;
  objectKeys = Object.keys;

  dataParent = [
    {
    "ID": "001",
    "Client": "Homero",
    "Description": "Feo",
    "ArivalDate": "Hoy",
    "State" : "Listo para entrega",
    "District" : "UwU",
    "Route" : "[OwO, UwU, opo]",
    "Discount" : "null",
    "Tax" : "0"
  },
  {    
    "ID": "002",
    "Client": "Maggie",
    "Description": "Bebe",
    "ArivalDate": "Dos meses",
    "State":"En sucursa",
    "District" : "OwO",
    "Route" : "[OwO, Uwu, opo]",
    "Discount" : "null",
    "Tax" : "0"
  },
  {
    "ID": "003",
    "Client": "Bart",
    "Description": "Cool",
    "ArivalDate": "Ayer",
    "State":"En ruta de entrega",
    "District" : "OwO",
    "Route" : "[OwO, Uwu, opo]",
    "Discount" : "null",
    "Tax" : "0"
  }
];

  
  ngOnInit(): void {

  }

  isConsulting(){
    this.consultationRequest = true;
  }

  consultPackage(){
    var value = this.userForm.get('TrackingID').value;
    if(!isNaN(value)){
      this.isNumber = true;

      // Arreglar con un for (voy a mimis)
      if(value == this.objectValues(this.dataParent[0])[0]){
        this.state = this.objectValues(this.dataParent[0])[4];
        console.log(this.objectValues(this.dataParent[0])[4]);
      }

    }
    else{
      this.isNumber = false;
    }
  }
  
}
