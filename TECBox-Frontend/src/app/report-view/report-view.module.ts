import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReportViewComponent } from './report-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReportViewComponent],
  imports: [
    CommonModule,
    ReportViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ]
})
export class ReportViewModule { }
