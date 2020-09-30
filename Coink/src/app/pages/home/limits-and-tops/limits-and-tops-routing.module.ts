import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimitsAndTopsPage } from './limits-and-tops.page';

const routes: Routes = [
  {
    path: '',
    component: LimitsAndTopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimitsAndTopsPageRoutingModule {}
