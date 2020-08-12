import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninSecurityPageRoutingModule } from './signin-security-routing.module';

import { SigninSecurityPage } from './signin-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninSecurityPageRoutingModule
  ],
  declarations: [SigninSecurityPage]
})
export class SigninSecurityPageModule {}
