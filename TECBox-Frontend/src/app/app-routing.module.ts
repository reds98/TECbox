import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'admin-view', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule) },
  { path: 'report-view', loadChildren: () => import('./report-view/report-view.module').then(m => m.ReportViewModule) },
  { path: 'cellar-view', loadChildren: () => import('./cellar-view/cellar-view.module').then(m => m.CellarViewModule) },
  { path: 'client-view', loadChildren: () => import('./client-view/client-view.module').then(m => m.ClientViewModule) },
  { path: 'home-view', loadChildren: () => import('./home-view/home-view.module').then(m => m.HomeViewModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
