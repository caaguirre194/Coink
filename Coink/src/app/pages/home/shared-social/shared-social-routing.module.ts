import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedSocialPage } from './shared-social.page';

const routes: Routes = [
  {
    path: '',
    component: SharedSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedSocialPageRoutingModule {}
