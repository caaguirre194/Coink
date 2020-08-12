import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninTermsPageRoutingModule } from './signin-terms-routing.module';

import { SigninTermsPage } from './signin-terms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninTermsPageRoutingModule
  ],
  declarations: [SigninTermsPage]
})
export class SigninTermsPageModule {}
