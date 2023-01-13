import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellercmsPageRoutingModule } from './sellercms-routing.module';

import { SellercmsPage } from './sellercms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SellercmsPageRoutingModule
  ],
  declarations: [SellercmsPage]
})
export class SellercmsPageModule {}
