import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

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

  selectedItem = null;
  title = 'Seleccione una vista';

  // Changes between different views
  onChageView(cod: string, title: string): void {
    this.selectedItem = null;
    this.items = null;
    this.title = 'Cargando';
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.items = this.data[cod]['data'];
        this.title = title;
        console.log(data);
      });
  }

  // Adds item
  newItem(): void {
    this.selectedItem = Object.entries(this.items[0]).map(item => {
      return [item[0], ''];
    });
  }

  // Deletes item
  deleteItem(selectedItem): void {
    this.items = this.items.filter(item => selectedItem !== item);
    this.selectedItem = null;
  }

  // Selects item
  selectItem(selectedItem) {
    this.selectedItem = Object.entries(selectedItem);
  }

  // Deselects item
  onConfirm() {
    this.selectedItem = null;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
}
