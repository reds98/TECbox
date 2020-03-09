import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReportViewComponent } from './report-view.component';


@NgModule({
  declarations: [ReportViewComponent],
  imports: [
    CommonModule,
    ReportViewRoutingModule
  ]
})
export class ReportViewModule { }
