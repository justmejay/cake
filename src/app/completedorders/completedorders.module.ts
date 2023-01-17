import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletedordersPageRoutingModule } from './completedorders-routing.module';

import { CompletedordersPage } from './completedorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedordersPageRoutingModule
  ],
  declarations: [CompletedordersPage]
})
export class CompletedordersPageModule {}
