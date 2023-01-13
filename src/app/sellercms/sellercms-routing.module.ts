import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellercmsPage } from './sellercms.page';

const routes: Routes = [
  {
    path: '',
    component: SellercmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellercmsPageRoutingModule {}
