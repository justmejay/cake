import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerAccountsPage } from './seller-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: SellerAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerAccountsPageRoutingModule {}
