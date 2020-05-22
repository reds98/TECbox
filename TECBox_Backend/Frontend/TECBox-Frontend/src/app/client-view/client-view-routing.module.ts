import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientViewComponent } from './client-view.component';

const routes: Routes = [{ path: '', component: ClientViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientViewRoutingModule { }
