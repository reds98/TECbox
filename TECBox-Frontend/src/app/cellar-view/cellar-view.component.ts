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

  // Attributes
  columnsParent = ["ID de rastreo", "Cliente", "Descripción", "Fecha de Entrega", "Estado", "Distrito", "Ruta", "Descuento", "Impuesto"];
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

  // Verifies that the client is consulting a package
  isConsulting(){
    this.consultationRequest = true;
  }

  // Checks if the number provided matches an existing package and returns it's current state
  consultPackage(){
    var value = this.userForm.get('TrackingID').value;
    if(!isNaN(value)){
      this.isNumber = true;

      for(var i = 0; i < this.dataParent.length; i++){
        if(value == this.objectValues(this.dataParent[i])[0]){
          this.state = "El paquete se encuentra: " + this.objectValues(this.dataParent[i])[4];
          break;
        }
        else{
          this.state = "No se ha encontrado un paquete con el número de traqueo cosultado.";
        }
      }
    }
    else{
      this.isNumber = false;
    }
  }
}
