import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { CellarViewService } from 'src/app/cellar-view/cellar-view.service'


@Component({
  selector: 'app-cellar-view',
  templateUrl: './cellar-view.component.html',
  styleUrls: ['./cellar-view.component.css']
})
export class CellarViewComponent implements OnInit {

  constructor(private cellarService: CellarViewService) { }

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

  dataParent;

  
  // Assigns the data received to the dataParent attr
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.cellarService.getPackage()
    .subscribe(data => {
      let oldData = localStorage.getItem('tableData');
      this.dataParent = data;
      console.log(data);
      console.log(this.dataParent);
      localStorage.setItem('tableData', JSON.stringify(data));
      if(oldData != localStorage.getItem('tableData')){
        location.reload();
      }
    });
    
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
