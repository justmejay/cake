import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcakePageRoutingModule } from './addcake-routing.module';

import { AddcakePage } from './addcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcakePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddcakePage]
})
export class AddcakePageModule {}
