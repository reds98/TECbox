import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminViewService } from 'src/app/admin-view/admin-view.service'

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  items;
  data = {
    'roles': {
    },
    'offices': {
    },
    'workers': {
    },
    'sellers': {
    },
    'products': {
    },
    'routes': {
    },
    'app_movil_auth': {'authorized': 'false'},
    'app_movil_packages': {
    }
  };

  selectedItem = null;
  title = 'Seleccione una vista';
  
  objectValues = Object.values;
  objectKeys = Object.keys;


  // Gets data from the server and sets localStorage items
  getData(type, dataType){
    this.selectedItem = null;
    this.items = null;
    this.title = 'Cargando';
    console.log(type)
    console.log( window.location.origin)
    this.adminService.getItems(type)
    
    .subscribe(data => {
      let oldData = localStorage.getItem(dataType);
      localStorage.setItem(dataType, JSON.stringify(data));
      if(oldData != localStorage.getItem(dataType)){
        location.reload();
      }
    });
    this.setData(type);
  }

  // Sets the information to each item
  setData(type){
    this.data.roles = JSON.parse(localStorage.getItem('RolesData'));
    this.data.offices = JSON.parse(localStorage.getItem('OfficesData'));
    this.data.workers = JSON.parse(localStorage.getItem('WorkersData'));
    this.data.sellers = JSON.parse(localStorage.getItem('SellersData'));
    this.data.products = JSON.parse(localStorage.getItem('ProductsData'));
    this.data.routes = JSON.parse(localStorage.getItem('RoutesData'));
    
    this.items = this.data[type];
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

  constructor(private adminService: AdminViewService) {
  }

  ngOnInit(): void {

  }
}
