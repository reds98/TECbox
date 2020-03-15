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
  newProduct;

  objectValues = Object.values;
  objectKeys = Object.keys;

  // Child attribute
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
    this.initPopovers()
    }


  // Initializes Data table structure 
  initTable(){
    $(document).ready(function() {
      $('#cellerTable').DataTable( {
        
      } );
    } );
  }
    
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


  // Opens form for submiting new product
  newItem():void{
  this.selectedItem = Object.entries(this.productArray[0]).map(item=>{return [this.productArray[0],""]});
  this.newProduct = true;
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

  // Creates form
  userForm = new FormGroup({
	ID: new FormControl(),
	Client: new FormControl(),
	Description: new FormControl(),
  ArrivalDate: new FormControl()
  });
  
  // Submit button function
  onFormSubmit(): void {
    this.addProduct([this.userForm.get('ID').value, this.userForm.get('Client').value, this.userForm.get('Description').value,this.userForm.get('ArrivalDate').value], 0)
  }

  // Sets a default value for the new product
  setDefaultValue() { 
    this.userForm.setValue({ID: 1234, Client: 'Cliente1', Description: 'Grande', ArrivalDate: 'ayer'});
  }

  // Adds new product to the table
  addProduct(list, i){

    var table = (<HTMLTableElement>document.getElementById('cellerTable'));

    var row = table.insertRow(-1);
    while(i < 4){
    var cell = row.insertCell(i);
    cell.innerHTML = list[i];
    i++;
    }
  }
}