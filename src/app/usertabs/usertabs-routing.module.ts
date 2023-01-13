import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsertabsPage } from './usertabs.page';

const routes: Routes = [
  {
    path: '',
    component: UsertabsPage,
    children:[
      {
        path:'user-accounts',
        children:[
          {
            path: '',
            loadChildren: () => import('../user-accounts/user-accounts.module').then( m => m.UserAccountsPageModule)
          }
        ] 
      },
      {
        path:'user-dashboard',
        children:[
          {
            path: '',
            loadChildren: () => import('../user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
          }
        ] 
      },
      {
        path:'user-order',
        children:[
          {
            path: '',
            loadChildren: () => import('../user-order/user-order.module').then( m => m.UserOrderPageModule)
          }
        ] 
      },
      
      {
        path:'',
        redirectTo: 'user-accounts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsertabsPageRoutingModule {}
