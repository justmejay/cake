import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerAccountsPageRoutingModule } from './seller-accounts-routing.module';

import { SellerAccountsPage } from './seller-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerAccountsPageRoutingModule
  ],
  declarations: [SellerAccountsPage]
})
export class SellerAccountsPageModule {}
