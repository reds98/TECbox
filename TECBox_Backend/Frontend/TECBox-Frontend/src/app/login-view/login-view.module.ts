import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { LoginViewRoutingModule } from './login-view-routing.module';
import { LoginViewComponent } from './login-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginViewComponent],
  imports: [
    CommonModule,
    LoginViewRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LoginViewModule { }
