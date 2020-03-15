import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';
import {AdminViewRoutingModule} from '../admin-view/admin-view-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CellarViewComponent
  ],
  imports: [
    CommonModule,
    CellarViewRoutingModule,
<<<<<<<<< Temporary merge branch 1
    FormsModule,
    ReactiveFormsModule
=========
    SharedModule
>>>>>>>>> Temporary merge branch 2
  ]
})
export class CellarViewModule { }

