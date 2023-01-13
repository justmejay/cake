import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpricesizePage } from './editpricesize.page';

const routes: Routes = [
  {
    path: '',
    component: EditpricesizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpricesizePageRoutingModule {}
