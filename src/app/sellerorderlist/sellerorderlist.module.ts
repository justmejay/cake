import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerorderlistPageRoutingModule } from './sellerorderlist-routing.module';

import { SellerorderlistPage } from './sellerorderlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerorderlistPageRoutingModule
  ],
  declarations: [SellerorderlistPage]
})
export class SellerorderlistPageModule {}
