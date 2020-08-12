import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninCodePage } from './signin-code.page';

const routes: Routes = [
  {
    path: '',
    component: SigninCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninCodePageRoutingModule {}
