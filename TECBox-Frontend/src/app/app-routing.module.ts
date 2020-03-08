import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrocerComponent } from './grocer/grocer.component';

const routes: Routes = [
  { path: 'grocer', component: GrocerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
