import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  startDate = new Date(2000, 0, 1);
  finalDate = new Date(2020, 0, 1);
  items;
  data = {
    'gestion_roles': {
      'data': [
        {
          'nombre': 'administrador',
          'descripcion': 'inutil'
        },
        {
          'nombre': 'repartidor',
          'descripcion': 'maquina'
        },
        {
          'nombre': 'bodeguero',
          'descripcion': 'mamdisimo'
        }
      ]
    },
    'gestion_sucursales': {
      'data': [
        {
          'nombre': 'sucursal1',
          'provincia': 'cartago',
          'distrito': 'central',
          'telefono': '777',
          'encargado': 'nadie'
        },
        {
          'nombre': 'sucursal2',
          'provincia': 'san jose',
          'distrito': 'central',
          'telefono': '778',
          'encargado': 'nadiex2'
        },
        {
          'nombre': 'sucursal1',
          'provincia': 'cartago',
          'distrito': 'central',
          'telefono': '779',
          'encargado': 'todos'
        }
      ]
    },
    'gestion_trabajadores': {
      'data': [
        {
          'numero_cedula': '123',
          'nombre_completo': 'allahu akbar',
          'fecha_nacimiento': 'ayer',
          'fecha_ingreso': 'hoy',
          'sucursal': 'sucursal1',
          'salario_mensual': '2$',
          'salario_hora': 'nada'
        },
        {
          'numero_cedula': '321',
          'nombre_completo': 'allahu akbar hijo',
          'fecha_nacimiento': 'hoy',
          'fecha_ingreso': 'hoy',
          'sucursal': 'sucursal1',
          'salario_mensual': '1$',
          'salario_hora': '-1$'
        },
        {
          'numero_cedula': '777',
          'nombre_completo': 'patricio estrella',
          'fecha_nacimiento': '5/2/1800',
          'fecha_ingreso': '5/2/2000',
          'sucursal': 'sucursal2',
          'salario_mensual': '10000$',
          'salario_hora': '1000$'
        }
      ]
    },
    'gestion_vendedores': {
      'data': [
        {
          'numero_cedula': '456',
          'nombre_completo': 'bob esponja'
        },
        {
          'numero_cedula': '457',
          'nombre_completo': 'panchito'
        },
        {
          'numero_cedula': '458',
          'nombre_completo': 'no se'
        }
      ]
    },
    'gestion_productos': {
      'data': [
        {
          'nombre': 'cuerda',
          'descripcion': 'atar cosas',
          'codigo_barras': '123',
          'vendedor': 'panchito',
          'precio_compra': '10$',
          'impuesto': 'chi',
          'descuento': 'ño'
        },
        {
          'nombre': 'mechero',
          'descripcion': 'quemar infieles',
          'codigo_barras': '124',
          'vendedor': 'panchito',
          'precio_compra': '10$',
          'impuesto': 'chi',
          'descuento': 'chi'
        },
        {
          'nombre': 'cuerda',
          'descripcion': 'zapatos',
          'codigo_barras': '125',
          'vendedor': 'no se',
          'precio_compra': '100$',
          'impuesto': 'ño',
          'descuento': 'ño'
        }
      ]
    },
    'gestion_rutas': {
      'data': [
        {
          'distritos': 'UwU'
        },
        {
          'distritos': 'UwUx2'
        },
        {
          'distritos': 'UwUx3'
        }
      ]
    },
    'app_movil_auth': {'authorized': 'false'},
    'app_movil_paquetes': {
      'data': [
        {'nombre': 'F1', 'estado': 'pendiente'},
        {'nombre': 'F2', 'estado': 'entregado'},
        {'nombre': 'F3', 'estado': 'fallido'},
        {'nombre': 'F4', 'estado': 'devuelto'}
      ]
    }
  };

  startDateInput = this.startDate;
  endDateInput = this.finalDate;

  selectedItem = null;
  title = 'Seleccione una vista';
  cod = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.selectedItem = null;
    this.items = null;
    this.title = 'Cargando';
    this.http.get('api/offices')
      .subscribe((data) => {
        this.items = data;
        this.title = 'Roles';
        console.log(data[this.cod]);
      });
  }


  print(prod1, prod2){
    console.log(prod1, prod2);
  }
}
