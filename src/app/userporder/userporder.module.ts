import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserporderPageRoutingModule } from './userporder-routing.module';

import { UserporderPage } from './userporder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserporderPageRoutingModule
  ],
  declarations: [UserporderPage]
})
export class UserporderPageModule {}
