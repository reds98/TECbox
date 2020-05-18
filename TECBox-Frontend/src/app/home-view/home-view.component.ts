import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';

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
  costDiscTaxArray;
  productArray;
  isNumber = true;
  state;
  totalCost;
  userForm = new FormGroup({
    TrackingID: new FormControl()
  });


  
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
      "descripcion": "quemar",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10",
      "impuesto": "0.4",
      "descuento": "0.2",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "Amarrar artefactos",
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
      "descripcion": "Instrumento decorativo",
      "codigo_barras": "124",
      "vendedor": "panchito",
      "precio_compra": "10",
      "impuesto": "0.4",
      "descuento": "0.2",
      "imagen" : "https://images-na.ssl-images-amazon.com/images/I/41tTOKXoUHL._SX342_.jpg"
    },
    {
      "nombre": "cuerda",
      "descripcion": "Ser una cuerda",
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
      "descripcion": "Equipo de laboratorio",
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
    this.costDiscTaxArray = [];
    this.productArray = [];
    this.totalCost = 0;
  }

  
    // Checks if the number provided matches an existing package and returns it's current state
    consultPackage(){
      var value = this.userForm.get('TrackingID').value;
      if(!isNaN(value)){
        this.isNumber = true;
      }
      else{
        this.isNumber = false;
      }
    }


  // Receives a list of the products cost, discount and tax, respectively as list1 and the product's name as prod
  addToCart(list1, prod){
    this.costDiscTaxArray.push(list1);
    this.productArray.push(prod);
    console.log(this.costDiscTaxArray);
  }

  calcPurchaseTotal(){
    var costWDiscount = 0;
    var costWTax = 0;
    var array = this.costDiscTaxArray;
    let i: number = 0;
    this.totalCost = 0;
    while(i < array.length){
      if(array[i][1] != 0 && array[i][2] !=0){
        costWDiscount += (array[i][0]*(1 - array[i][1]));
        costWTax += (costWDiscount + costWDiscount*array[i][2]);
        this.totalCost += costWTax;
        costWDiscount = 0; 
        costWTax = 0;
        i++;
      }
    }
  }
}

