import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninSecurityPage } from './signin-security.page';

const routes: Routes = [
  {
    path: '',
    component: SigninSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninSecurityPageRoutingModule {}
