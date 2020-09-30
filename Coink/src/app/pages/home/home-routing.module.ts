import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'shared-social',
    loadChildren: () => import('./shared-social/shared-social.module').then( m => m.SharedSocialPageModule)
  },
  {
    path: 'limits-and-tops',
    loadChildren: () => import('./limits-and-tops/limits-and-tops.module').then( m => m.LimitsAndTopsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
