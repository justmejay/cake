import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcakePage } from './editcake.page';

const routes: Routes = [
  {
    path: '',
    component: EditcakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcakePageRoutingModule {}
