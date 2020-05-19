import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientViewRoutingModule } from './client-view-routing.module';
import { ClientViewComponent } from './client-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ClientViewComponent],
  imports: [
    CommonModule,
    ClientViewRoutingModule,
    SharedModule
  ]
})
export class ClientViewModule { }
