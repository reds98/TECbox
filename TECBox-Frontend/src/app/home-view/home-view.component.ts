import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  products: Object;
  term;

  
  objectValues = Object.values;
  objectKeys = Object.keys;

  dataParent = [
    {
      "nombre": "cuerda",
      "descripcion": "atar cosas",
      "codigo_barras": "123",
      "vendedor": "panchito",
      "precio_compra": "10$",
      "impuesto": "chi",
      "descuento": "ño",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "mechero",
      "descripcion": "quemar infieles",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10$",
      "impuesto": "chi",
      "descuento": "chi",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "zapatos",
      "codigo_barras": "125",
      "vendedor": "no se",
      "precio_compra": "100$",
      "impuesto": "ño",
      "descuento": "ño",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    }
  ];



  ngOnInit(): void {
    this.products = this.dataParent;
  }

}
