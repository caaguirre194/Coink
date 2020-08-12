import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPhonePage } from './signin-phone.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPhonePageRoutingModule {}
