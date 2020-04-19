import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  // Attributes
  products: Object;
  search;
  packageArray;

  
  objectValues = Object.values;
  objectKeys = Object.keys;

  dataParent = [
    {
      "nombre": "cuerda",
      "descripcion": "atar cosas",
      "codigo_barras": "123",
      "vendedor": "panchito",
      "precio_compra": "20",
      "impuesto": "0.7",
      "descuento": "0",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "mechero",
      "descripcion": "quemar infieles",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10",
      "impuesto": "0.4",
      "descuento": "0.2",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "zapatos",
      "codigo_barras": "125",
      "vendedor": "no se",
      "precio_compra": "100",
      "impuesto": "0.13",
      "descuento": "0.1",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "atar cosas",
      "codigo_barras": "123",
      "vendedor": "panchito",
      "precio_compra": "20",
      "impuesto": "0.7",
      "descuento": "0",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "mechero",
      "descripcion": "quemar infieles",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10",
      "impuesto": "0.4",
      "descuento": "0.2",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "zapatos",
      "codigo_barras": "125",
      "vendedor": "no se",
      "precio_compra": "100",
      "impuesto": "0.13",
      "descuento": "0.1",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "atar cosas",
      "codigo_barras": "123",
      "vendedor": "panchito",
      "precio_compra": "20",
      "impuesto": "0.7",
      "descuento": "0",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    },
    {
      "nombre": "mechero",
      "descripcion": "quemar infieles",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10",
      "impuesto": "0.4",
      "descuento": "0.2",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "zapatos",
      "codigo_barras": "125",
      "vendedor": "no se",
      "precio_compra": "100",
      "impuesto": "0.13",
      "descuento": "0.1",
      "imagen" : "https://www.decowoerner.com/images/contentUploads/pictures/500_599/550/www/101000/550_116_00-1-0-00.jpg"
    }
  ];



  ngOnInit(): void {
    this.products = this.dataParent;
    this.packageArray = [];
  }

  // Receives a list of the products cost, discount and tax, respectively
  addToCart(list){
    this.packageArray.push(list);
    console.log(this.packageArray);
  }

  calcPurchaseTotal(){
  }

}
