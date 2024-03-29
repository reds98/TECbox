// This module is to allow using a shared component in multiple different modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [TableComponent]
})
export class SharedModule { }
