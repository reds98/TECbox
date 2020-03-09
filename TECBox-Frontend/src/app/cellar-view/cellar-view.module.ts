import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellarViewRoutingModule } from './cellar-view-routing.module';
import { CellarViewComponent } from './cellar-view.component';


@NgModule({
  declarations: [CellarViewComponent],
  imports: [
    CommonModule,
    CellarViewRoutingModule
  ]
})
export class CellarViewModule { }
