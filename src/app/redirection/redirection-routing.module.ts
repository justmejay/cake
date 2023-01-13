import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectionPage } from './redirection.page';

const routes: Routes = [
  {
    path: '',
    component: RedirectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedirectionPageRoutingModule {}
