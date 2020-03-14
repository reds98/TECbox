import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

declare var $;


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  
  productArray;
  selectedItem;
  newProduct;

  objectValues = Object.values;
  objectKeys = Object.keys;

  @Input() columns = null;

  data = {
    "gestion_roles": {
      "data": [
        {
          "nombre": "administrador",
          "descripcion": "inutil"
        },
        {
          "nombre": "repartidor",
          "descripcion": "maquina"
        },
        {
          "nombre": "grocer",
          "descripcion": "mamadisimo"
        }
      ]
    },
    "gestion_sucursales": {
      "data": [
        {
          "nombre": "sucursal1",
          "provincia": "cartago",
          "distrito": "central",
          "telefono": "777",
          "encargado": "nadie"
        },
        {
          "nombre": "sucursal2",
          "provincia": "san jose",
          "distrito": "central",
          "telefono": "778",
          "encargado": "nadiex2"
        },
        {
          "nombre": "sucursal1",
          "provincia": "cartago",
          "distrito": "central",
          "telefono": "779",
          "encargado": "todos"
        }
      ]
    },
    "gestion_trabajadores": {
      "data": [
        {
          "numero_cedula": "123",
          "nombre_completo": "allahu akbar",
          "fecha_nacimiento": "ayer",
          "fecha_ingreso": "hoy",
          "sucursal": "sucursal1",
          "salario_mensual": "2$",
          "salario_hora": "nada"
        },
        {
          "numero_cedula": "321",
          "nombre_completo": "allahu akbar hijo",
          "fecha_nacimiento": "hoy",
          "fecha_ingreso": "hoy",
          "sucursal": "sucursal1",
          "salario_mensual": "1$",
          "salario_hora": "-1$"
        },
        {
          "numero_cedula": "777",
          "nombre_completo": "patricio estrella",
          "fecha_nacimiento": "5/2/1800",
          "fecha_ingreso": "5/2/2000",
          "sucursal": "sucursal2",
          "salario_mensual": "10000$",
          "salario_hora": "1000$"
        }
      ]
    },
    "gestion_vendedores": {
      "data": [
        {
          "numero_cedula": "456",
          "nombre_completo": "bob esponja"
        },
        {
          "numero_cedula": "457",
          "nombre_completo": "panchito"
        },
        {
          "numero_cedula": "458",
          "nombre_completo": "no se"
        }
      ]
    },
    "gestion_productos": {
      "data": [
        {
          "nombre": "cuerda",
          "descripcion": "atar cosas",
          "codigo_barras": "123",
          "vendedor": "panchito",
          "precio_compra": "10$",
          "impuesto": "chi",
          "descuento": "�o"
        },
        {
          "nombre": "mechero",
          "descripcion": "quemar infieles",
          "codigo_barras": "124",
          "vendedor": "panchito",
          "precio_compra": "10$",
          "impuesto": "chi",
          "descuento": "chi"
        },
        {
          "nombre": "cuerda",
          "descripcion": "zapatos",
          "codigo_barras": "125",
          "vendedor": "no se",
          "precio_compra": "100$",
          "impuesto": "�o",
          "descuento": "�o"
        }
      ]
    },
    "gestion_rutas": {
      "data": [
        {
          "distritos": "UwU"
        },
        {
          "distritos": "UwUx2"
        },
        {
          "distritos": "UwUx3"
        }
      ]
    },  
    "gestion_paquetes": {
      "data": [
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
      ]
    },
  
    "app_movil_auth":{"authorized":"false"},
    "app_movil_paquetes":{
      "data":[
        {"nombre":"F1","estado":"pendiente"},
        {"nombre":"F2","estado":"entregado"},
        {"nombre":"F3","estado":"fallido"},
        {"nombre":"F4","estado":"devuelto"}
        ]
    }
  }
  

  ngOnInit () {
    this.selectedItem = null;
    this.productArray = null;
    this.productArray = this.data['gestion_paquetes']['data'];

    $(document).ready(function () {
      $('#cellerTable').DataTable( {
      });
      });

      

    $(document).ready(function(){
      $('[data-toggle="popover"]').popover({
          placement : 'left',
          trigger : 'hover'
      });
    });
    
    $("#saveBtn").attr('visible', 'false');


    }


  deleteItem(selectedItem):void{
    this.productArray = this.productArray.filter(item => selectedItem !== item);
    this.selectedItem = null;
    $(".popover").remove();

    $("#deleteBtn2").parents("tr").remove();
        
  }


  selectItem (selectedItem) {
    this.selectedItem = Object.entries(selectedItem);
  }

  newItem():void{
    this.selectedItem = Object.entries(this.productArray[0]).map(item=>{return [this.productArray[0],""]});
  }

  editItem(){
    $("#cellerTable").closest('div').attr('contenteditable', 'true');
    $("#cellerTable").closest('div').focus();
    $("#saveBtn").show();
  }

  saveEdit(){
    $("#cellerTable").closest('div').attr('contenteditable', 'false');
    $("#saveBtn").hide();              
    var table = $('#cellerTable').DataTable();

    table
        .rows()
        .invalidate()
        .draw();

  }

  userForm = new FormGroup({
	ID: new FormControl(),
	Client: new FormControl(),
	Description: new FormControl(),
  ArrivalDate: new FormControl()
  });
  
  onFormSubmit(): void {
    this.addProduct([this.userForm.get('ID').value, this.userForm.get('Client').value, this.userForm.get('Description').value,this.userForm.get('ArrivalDate').value, ""], 0)
  }

  setDefaultValue() { 
    this.userForm.setValue({ID: 1234, Client: 'Cliente1', Description: 'Grande', ArrivalDate: 'ayer'});
  }

  addProduct(list, i){
    
    var table = (<HTMLTableElement>document.getElementById('cellerTable'));

    
    var deleteButton = document.createElement('button');
    deleteButton.classList.add("btn");
    deleteButton.innerHTML = '<button><i class="fa fa-trash"></i></button>'
    deleteButton.id="deleteBtn2";
    deleteButton.addEventListener("click", (e:Event) => this.deleteItem(this.selectItem));
    
    var editButton = document.createElement('button');
    editButton.classList.add("btn");
    editButton.innerHTML = '<button><i class="fa fa-edit"></i></button>'
    editButton.id="editBtn2";
    editButton.addEventListener("click", (e:Event) => this.editItem());

    var row = table.insertRow(-1);
    while(i < 5){
    var cell = row.insertCell(i);
    cell.innerHTML = list[i];
    if(i == 4){
      cell.append(deleteButton);
      cell.append(editButton); 
    }
    i++;
    }

  }

}