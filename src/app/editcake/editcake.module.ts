import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditcakePageRoutingModule } from './editcake-routing.module';

import { EditcakePage } from './editcake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditcakePageRoutingModule
  ],
  declarations: [EditcakePage]
})
export class EditcakePageModule {}
