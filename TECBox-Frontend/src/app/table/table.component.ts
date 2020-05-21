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
  
  // Attributes
  productArray;
  selectedItem;
  newProduct =false;
  emptyField = false;

  objectValues = Object.values;
  objectKeys = Object.keys;

  // Child attributes
  @Input() columns = null;
  @Input() data = null;

  
  // Runs first
  ngOnInit () {
    this.selectedItem = null;
    this.productArray = null;
    this.productArray = this.data;

    this.initTable();
    this.selectItems();
    this.deleteItems();
    this.initPopovers();
    this.initForm();
    }


  // Initializes Data table structure 
  initTable(){
    $(document).ready(function() {
      $('#cellerTable').DataTable( {
      "bPaginate": false,
      "bLengthChange": false,
      "bFilter": true,
      "bInfo": false,
      } );
    } );
  }
    
  // Initializes popovers
  initPopovers(){ 
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover({
          placement : 'left',
          trigger : 'hover'
      });
    });
    $("#saveBtn").attr('visible', 'false');
  }

  // Creates form
  userForm = new FormGroup({});

  initForm(){
    for(var i = 0; i < this.columns.length; i++){
      this.userForm.addControl(this.columns[i], new FormControl());
    }
  };

  // Method for selecting rows in table
  selectItems(){
    $(document).ready(function() {
      var table = $('#cellerTable').DataTable();
    
      $('#cellerTable tbody').on( 'click', 'tr', function () {
          if ( $(this).hasClass('selected') ) {
              $(this).removeClass('selected');
          }
          else {
              table.$('tr.selected').removeClass('selected');
              $(this).addClass('selected');
          }
      } );
  } );
  }


  // Deletes selected row
  deleteItems(){
    $('#deleteBtn').click( function () {
      $('#cellerTable').DataTable().row('.selected').remove().draw( false );
  } );
  }


  // Checks for empty fields in form and adds the inputs to a lists
  checkForm(){
    for(var i = 0; i < this.columns.length; i++){
      if(this.userForm.get(this.columns[i]).value == null){
        this.emptyField = true;
      }
      else if(!this.userForm.get(this.columns[i]).value.emptyField){
        this.emptyField = false;
      }
    }
    if(this.emptyField == false){
      var list:any = [];
      for(var i = 0; i < this.columns.length; i++){
        list.push(this.userForm.get(this.columns[i]).value);
      }
      this.addProduct(list, 0);
      this.newProduct = !this.newProduct;
    }
  }


  // Opens form for submiting new product
  newItem():void{
    this.newProduct = !this.newProduct;
    this.selectedItem = Object.entries(this.productArray[0]).map(item=>{return [this.productArray[0],""]});
  }


  // Enables editing of rows
  editItem(){
    $("#cellerTable").closest('div').attr('contenteditable', 'true');
    $("#cellerTable").closest('div').focus();
    $("#saveBtn").show();
  }

  // Disenables editing of rows
  saveEdit(){
    $("#cellerTable").closest('div').attr('contenteditable', 'false');
    $("#saveBtn").hide();              
    var table = $('#cellerTable').DataTable();

    table
        .rows()
        .invalidate()
        .draw();
  }


  // Adds new product to the table
  addProduct(list, i){

    var table = (<HTMLTableElement>document.getElementById('cellerTable'));

    var row = table.insertRow(-1);
    while(i < this.columns.length){
    var cell = row.insertCell(i);
    cell.innerHTML = list[i];
    i++;
    }
  }
}