import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccountsPage } from './user-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: UserAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountsPageRoutingModule {}
