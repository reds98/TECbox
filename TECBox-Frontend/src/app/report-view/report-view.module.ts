import { NgModule, enableProdMode } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReportViewComponent } from './report-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReportViewComponent],
  imports: [
    CommonModule,
    ReportViewRoutingModule,
    FormsModule,
  ]
})
export class ReportViewModule { }
