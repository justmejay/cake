import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirectionPageRoutingModule } from './redirection-routing.module';

import { RedirectionPage } from './redirection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirectionPageRoutingModule
  ],
  declarations: [RedirectionPage]
})
export class RedirectionPageModule {}
