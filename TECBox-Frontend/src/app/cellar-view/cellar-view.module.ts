import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CellarViewComponent
  ],
  imports: [
    CommonModule,
    CellarViewRoutingModule,
    SharedModule
  ]

})
export class CellarViewModule { }

