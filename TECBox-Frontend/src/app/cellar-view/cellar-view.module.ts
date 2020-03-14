import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';
import { TableComponent } from '../table/table.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CellarViewComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CellarViewRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]

})
export class CellarViewModule { }

