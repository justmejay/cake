import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileditPageRoutingModule } from './profiledit-routing.module';

import { ProfileditPage } from './profiledit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileditPageRoutingModule
  ],
  declarations: [ProfileditPage]
})
export class ProfileditPageModule {}
