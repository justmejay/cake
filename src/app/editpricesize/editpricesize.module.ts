import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpricesizePageRoutingModule } from './editpricesize-routing.module';

import { EditpricesizePage } from './editpricesize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpricesizePageRoutingModule
  ],
  declarations: [EditpricesizePage]
})
export class EditpricesizePageModule {}
