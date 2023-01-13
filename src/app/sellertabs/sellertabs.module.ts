import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellertabsPageRoutingModule } from './sellertabs-routing.module';

import { SellertabsPage } from './sellertabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellertabsPageRoutingModule
  ],
  declarations: [SellertabsPage]
})
export class SellertabsPageModule {}
