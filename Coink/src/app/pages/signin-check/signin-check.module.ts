import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninCheckPageRoutingModule } from './signin-check-routing.module';

import { SigninCheckPage } from './signin-check.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninCheckPageRoutingModule
  ],
  declarations: [SigninCheckPage]
})
export class SigninCheckPageModule {}
