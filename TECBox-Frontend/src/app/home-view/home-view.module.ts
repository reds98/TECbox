import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewComponent } from './home-view.component';


@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HomeViewRoutingModule
  ]
})
export class HomeViewModule { }
