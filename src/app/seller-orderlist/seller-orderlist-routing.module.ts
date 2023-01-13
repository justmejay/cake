import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerOrderlistPage } from './seller-orderlist.page';

const routes: Routes = [
  {
    path: '',
    component: SellerOrderlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerOrderlistPageRoutingModule {}
