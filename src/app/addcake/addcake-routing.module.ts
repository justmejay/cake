import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcakePage } from './addcake.page';

const routes: Routes = [
  {
    path: '',
    component: AddcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcakePageRoutingModule {}
