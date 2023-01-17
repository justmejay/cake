import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedordersPage } from './completedorders.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedordersPageRoutingModule {}
