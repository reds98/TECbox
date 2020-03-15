import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  
  products: Object;
  term;

  
  objectValues = Object.values;
  objectKeys = Object.keys;

  constructor() { }

  dataParent = [
    {
      "nombre": "cuerda",
      "descripcion": "atar cosas",
      "codigo_barras": "123",
      "vendedor": "panchito",
      "precio_compra": "10$",
      "impuesto": "chi",
      "descuento": "ño"
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
      "impuesto": "ño",
      "descuento": "ño"
    }
  ];



  ngOnInit(): void {
    this.products = this.dataParent;
  }

}

