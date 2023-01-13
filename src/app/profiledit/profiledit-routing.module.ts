import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileditPage } from './profiledit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileditPageRoutingModule {}
