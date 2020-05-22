import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewRoutingModule } from './admin-view-routing.module';
import { AdminViewComponent } from './admin-view.component';


@NgModule({
  declarations: [AdminViewComponent],
  imports: [
    CommonModule,
    AdminViewRoutingModule
  ]
})
export class AdminViewModule { }
