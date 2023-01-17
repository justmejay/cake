import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { SellertabsPage } from './sellertabs.page';

const routes: Routes = [
  {
    path: '',
    component: SellertabsPage,
    children:[
      {
        path:'seller-accounts',
        children:[
          {
            path: '',
            loadChildren: () => import('../seller-accounts/seller-accounts.module').then( m => m.SellerAccountsPageModule)
          }
        ] 
      },
      {
        path:'seller-dashboard',
        children:[
          {
            path: '',
            loadChildren: () => import('../seller-dashboard/seller-dashboard.module').then( m => m.SellerDashboardPageModule)
          }
        ] 
      },
      
      {
        path:'seller-orderlist',
        children:[
          {
            path: '',
            loadChildren: () => import('../seller-orderlist/seller-orderlist.module').then( m => m.SellerOrderlistPageModule)
          }
        ] 
      },
      {
        path:'completedorders',
        children:[
          {
            path: '',
            loadChildren: () => import('../completedorders/completedorders.module').then( m => m.CompletedordersPageModule)
          }
        ] 
      },
      
      {
        path:'',
        redirectTo: 'seller-accounts',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellertabsPageRoutingModule {}
