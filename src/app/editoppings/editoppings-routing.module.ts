import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditoppingsPage } from './editoppings.page';

const routes: Routes = [
  {
    path: '',
    component: EditoppingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditoppingsPageRoutingModule {}
