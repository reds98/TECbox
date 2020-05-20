import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportViewRoutingModule } from './report-view-routing.module';
import { ReportViewComponent } from './report-view.component';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [ReportViewComponent],
  imports: [
    CommonModule,
    ReportViewRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ]
})

export class ReportViewModule {}
