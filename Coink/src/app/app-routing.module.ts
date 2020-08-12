import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "init",
    pathMatch: "full",
  },
  {
    path: "init",
    loadChildren: () =>
      import("./pages/init/init.module").then((m) => m.InitPageModule),
  },
  {
    path: "signin-phone",
    loadChildren: () =>
      import("./pages/signin-phone/signin-phone.module").then(
        (m) => m.SigninPhonePageModule
      ),
  },
  {
    path: 'signin-code',
    loadChildren: () => import('./pages/signin-code/signin-code.module').then( m => m.SigninCodePageModule)
  },
  {
    path: 'signin-info',
    loadChildren: () => import('./pages/signin-info/signin-info.module').then( m => m.SigninInfoPageModule)
  },
  {
    path: 'signin-check',
    loadChildren: () => import('./pages/signin-check/signin-check.module').then( m => m.SigninCheckPageModule)
  },
  {
    path: 'signin-security',
    loadChildren: () => import('./pages/signin-security/signin-security.module').then( m => m.SigninSecurityPageModule)
  },
  {
    path: 'signin-terms',
    loadChildren: () => import('./pages/signin-terms/signin-terms.module').then( m => m.SigninTermsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
