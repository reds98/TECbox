import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: '', loadChildren: () => import('./home-view/home-view.module').then(m => m.HomeViewModule) },
  { path: 'admin-view', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule) },
  { path: 'report-view', loadChildren: () => import('./report-view/report-view.module').then(m => m.ReportViewModule) },
  { path: 'cellar-view', loadChildren: () => import('./cellar-view/cellar-view.module').then(m => m.CellarViewModule) },
  { path: 'client-view', loadChildren: () => import('./client-view/client-view.module').then(m => m.ClientViewModule) ,canActivateChild:[AuthGuard]},
  { path: 'login-view', loadChildren: () => import('./login-view/login-view.module').then(m => m.LoginViewModule) },
  { path: 'home-view', loadChildren: () => import('./home-view/home-view.module').then(m => m.HomeViewModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
