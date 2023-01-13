import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditoppingsPageRoutingModule } from './editoppings-routing.module';

import { EditoppingsPage } from './editoppings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditoppingsPageRoutingModule
  ],
  declarations: [EditoppingsPage]
})
export class EditoppingsPageModule {}
