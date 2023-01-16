import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerorderlistPage } from './sellerorderlist.page';

const routes: Routes = [
  {
    path: '',
    component: SellerorderlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerorderlistPageRoutingModule {}
