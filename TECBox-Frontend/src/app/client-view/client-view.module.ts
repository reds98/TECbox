import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientViewRoutingModule } from './client-view-routing.module';
import { ClientViewComponent } from './client-view.component';


@NgModule({
  declarations: [ClientViewComponent],
  imports: [
    CommonModule,
    ClientViewRoutingModule
  ]
})
export class ClientViewModule { }
