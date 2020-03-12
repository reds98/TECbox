import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';
import { TableComponent } from '../table/table.component';

@NgModule({
  declarations: [
    CellarViewComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CellarViewRoutingModule
  ]

})
export class CellarViewModule { }

