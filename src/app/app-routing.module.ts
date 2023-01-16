import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/redirection']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule),
    ...canActivate(redirectLoggedInToHome),

  },
  {
    path: 'user-order',
    loadChildren: () => import('./user-order/user-order.module').then( m => m.UserOrderPageModule)
  },
  {
    path: 'editcake',
    loadChildren: () => import('./editcake/editcake.module').then( m => m.EditcakePageModule)
  },
  {
    path: 'addcake',
    loadChildren: () => import('./addcake/addcake.module').then( m => m.AddcakePageModule)
  },
  {
    path: 'usercheckout',
    loadChildren: () => import('./usercheckout/usercheckout.module').then( m => m.UsercheckoutPageModule)
  },
  {
    path: 'userporder',
    loadChildren: () => import('./userporder/userporder.module').then( m => m.UserporderPageModule)
  },
  {
    path: 'sellercms',
    loadChildren: () => import('./sellercms/sellercms.module').then( m => m.SellercmsPageModule)
  },
  {
    path: 'redirection',
    loadChildren: () => import('./redirection/redirection.module').then( m => m.RedirectionPageModule)
  },
  {
    path: 'usertabs',
    loadChildren: () => import('./usertabs/usertabs.module').then( m => m.UsertabsPageModule),
        ...canActivate(redirectUnauthorizedToLogin),

  },
  {
    path: 'sellertabs',
    loadChildren: () => import('./sellertabs/sellertabs.module').then( m => m.SellertabsPageModule),
        ...canActivate(redirectUnauthorizedToLogin),

  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
 
  {
    path: 'profiledit',
    loadChildren: () => import('./profiledit/profiledit.module').then( m => m.ProfileditPageModule)
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule)
  },
  {
    path: 'user-accounts',
    loadChildren: () => import('./user-accounts/user-accounts.module').then( m => m.UserAccountsPageModule)
  },
  {
    path: 'seller-accounts',
    loadChildren: () => import('./seller-accounts/seller-accounts.module').then( m => m.SellerAccountsPageModule)
  },
  {
    path: 'seller-dashboard',
    loadChildren: () => import('./seller-dashboard/seller-dashboard.module').then( m => m.SellerDashboardPageModule)
  },
  {
    path: 'seller-orderlist',
    loadChildren: () => import('./seller-orderlist/seller-orderlist.module').then( m => m.SellerOrderlistPageModule)
  },  {
    path: 'editprice',
    loadChildren: () => import('./editprice/editprice.module').then( m => m.EditpricePageModule)
  },
  {
    path: 'editpricesize',
    loadChildren: () => import('./editpricesize/editpricesize.module').then( m => m.EditpricesizePageModule)
  },
  {
    path: 'editoppings',
    loadChildren: () => import('./editoppings/editoppings.module').then( m => m.EditoppingsPageModule)
  },
  {
    path: 'sellerorderlist',
    loadChildren: () => import('./sellerorderlist/sellerorderlist.module').then( m => m.SellerorderlistPageModule)
  },



 
  
  
  
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
