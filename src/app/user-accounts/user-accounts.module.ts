import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAccountsPageRoutingModule } from './user-accounts-routing.module';

import { UserAccountsPage } from './user-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccountsPageRoutingModule
  ],
  declarations: [UserAccountsPage]
})
export class UserAccountsPageModule {}
