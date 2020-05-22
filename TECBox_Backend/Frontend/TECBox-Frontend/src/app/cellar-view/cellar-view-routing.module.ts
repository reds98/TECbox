import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellarViewComponent } from './cellar-view.component';

const routes: Routes = [{ path: '', component: CellarViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CellarViewRoutingModule { }
