import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewRoutingModule } from './home-view-routing.module';
import { HomeViewComponent } from './home-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HomeViewRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class HomeViewModule { }
