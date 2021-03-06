import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { HomeViewService } from 'src/app/home-view/home-view.service'

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private homeService: HomeViewService) { }

  // Attributes
  products: Object;
  search;
  costDiscTaxArray;
  productArray;
  isNumber = true;
  state;
  totalCost;
  currentUser;
  packageData;
  clientData;
  index = 0;
  userForm = new FormGroup({
    TrackingID: new FormControl()
  });

  
  objectValues = Object.values;
  objectKeys = Object.keys;



  // Assigns the data received to the dataParent attr
  ngOnInit(): void {
    this.getData("Products", 'ProductsData');
    this.products = JSON.parse(localStorage.getItem('ProductsData'));
    this.getData("Packages", 'PackageData');
    this.packageData = JSON.parse(localStorage.getItem('PackageData'));
    this.getData("clients", 'ClientData');
    this.clientData = JSON.parse(localStorage.getItem('ClientData'));
    console.log(this.objectValues(this.clientData[0])[2]);
    this.costDiscTaxArray = [];
    this.productArray = [];
    this.totalCost = 0;
    this.currentUser = (localStorage.getItem('email'));
  }

  // Gets data from server
  getData(type, dataType){
    this.homeService.getItems(type)
    .subscribe(data => {
      let oldData = localStorage.getItem(dataType);
      localStorage.setItem(dataType, JSON.stringify(data));
      if(oldData != localStorage.getItem(dataType)){
        location.reload();
      }
    });
  }

  // VErifies that the consult for the packages state is being done by current user on his packages
  checkCurrentUser(userEmail): boolean{
    var bool = false;
    console.log("UserEmail: " + userEmail);
    for(var i = 0; i < this.packageData.length; i++){
      if(this.currentUser == this.objectValues(this.clientData[i])[2]){
        console.log("Email: " + this.objectValues(this.clientData[i])[2]);
        this.index = i;
        this.consultPackage();
        break;
      }
      else{
        bool = false;
        this.state = "Usted no puede acceder a esta información.";
      }
    }
    return bool;
  }

  // Checks if the number provided matches an existing package and returns it's current state
  consultPackage(){
    var value = this.userForm.get('TrackingID').value;
    if(!isNaN(value)){
      this.isNumber = true;
      if(value == this.objectValues(this.clientData[this.index])[8]){
        this.state = "El paquete se encuentra: " + this.objectValues(this.packageData[this.index])[4];
      }
      else{
        this.state = "No se ha encontrado un paquete en su cuenta con el número de traqueo cosultado.";
      }
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

  // Calculates the total cost of the purchase
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
