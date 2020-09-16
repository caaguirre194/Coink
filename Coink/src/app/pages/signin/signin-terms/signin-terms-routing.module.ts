import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninTermsPage } from './signin-terms.page';

const routes: Routes = [
  {
    path: '',
    component: SigninTermsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninTermsPageRoutingModule {}
