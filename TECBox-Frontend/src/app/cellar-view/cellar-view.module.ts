import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CellarViewModule { }

