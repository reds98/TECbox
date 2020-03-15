import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';
import { TableComponent } from '../table/table.component';
import {AdminViewRoutingModule} from '../admin-view/admin-view-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CellarViewComponent
  ],
  imports: [
    CommonModule,
    CellarViewRoutingModule
  ]
})
export class CellarViewModule { }

