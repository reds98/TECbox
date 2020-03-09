import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrocerComponent } from './grocer/grocer.component';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [
  { path: 'grocer', component: GrocerComponent },
];

const routes: Routes = [
  // { path: 'admin-view', component: AdminViewComponent },
  { path: 'admin-view', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule) },
  { path: 'report-view', loadChildren: () => import('./report-view/report-view.module').then(m => m.ReportViewModule) },
  { path: 'cellar-view', loadChildren: () => import('./cellar-view/cellar-view.module').then(m => m.CellarViewModule) },
  { path: 'client-view', loadChildren: () => import('./client-view/client-view.module').then(m => m.ClientViewModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
