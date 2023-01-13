import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsercheckoutPageRoutingModule } from './usercheckout-routing.module';

import { UsercheckoutPage } from './usercheckout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsercheckoutPageRoutingModule
  ],
  declarations: [UsercheckoutPage]
})
export class UsercheckoutPageModule {}
