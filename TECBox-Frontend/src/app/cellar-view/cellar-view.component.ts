import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cellar-view',
  templateUrl: './cellar-view.component.html',
  styleUrls: ['./cellar-view.component.css']
})
export class CellarViewComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  columnsParent = ["ID", "Cliente", "Descripción", "Fecha de Entrega", "Estado", "Distrito", "Ruta", "Descuento", "Impuesto"];
  consultationRequest = false;
  isNumber = true;
  Estado;
  userForm = new FormGroup({
    TrackingID: new FormControl()
    });

  objectValues = Object.values;
  objectKeys = Object.keys;

  dataParent = [
    {
    "ID": "001",
    "Cliente": "Homero",
    "Descripción": "Feo",
    "Fecha de Entrega": "Hoy",
    "Estado" : "Listo para entrega",
    "Distrito" : "UwU",
    "Ruta" : "[OwO, UwU, opo]",
    "Descuento" : "10%",
    "Impuesto" : "0"
  },
  {    
    "ID": "002",
    "Cliente": "Maggie",
    "Descripción": "Bebe",
    "Fecha de Entrega": "Dos meses",
    "Estado":"En sucursal",
    "Distrito" : "OwO",
    "Ruta" : "[OwO, Uwu, opo]",
    "Descuento" : "4%",
    "Impuesto" : "0"
  },
  {
    "ID": "003",
    "Cliente": "Bart",
    "Descripción": "Cool",
    "Fecha de Entrega": "Ayer",
    "Estado":"En ruta de entrega",
    "Distrito" : "OwO",
    "Ruta" : "[OwO, Uwu, opo]",
    "Descuento" : "0%",
    "Impuesto" : "0"
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
      for(var i = 0; i < this.dataParent.length; i++){
        if(value == this.objectValues(this.dataParent[i])[0]){
          this.Estado = "El paquete se encuentra: " + this.objectValues(this.dataParent[i])[4];
          break;
        }
        else{
          this.Estado = "No se ha encontrado un paquete con el número de traqueo cosultado.";
        }
      }
    }
    else{
      this.isNumber = false;
    }
  }
}
