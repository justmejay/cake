import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerOrderlistPageRoutingModule } from './seller-orderlist-routing.module';

import { SellerOrderlistPage } from './seller-orderlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerOrderlistPageRoutingModule
  ],
  declarations: [SellerOrderlistPage]
})
export class SellerOrderlistPageModule {}
