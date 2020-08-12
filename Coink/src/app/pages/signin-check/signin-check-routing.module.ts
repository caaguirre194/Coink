import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninCheckPage } from './signin-check.page';

const routes: Routes = [
  {
    path: '',
    component: SigninCheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninCheckPageRoutingModule {}
