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
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "signin-code",
    loadChildren: () =>
      import("./pages/signin/signin-code/signin-code.module").then(
        (m) => m.SigninCodePageModule
      ),
  },
  {
    path: "signin-info",
    loadChildren: () =>
      import("./pages/signin/signin-info/signin-info.module").then(
        (m) => m.SigninInfoPageModule
      ),
  },
  {
    path: "signin-check",
    loadChildren: () =>
      import("./pages/signin/signin-check/signin-check.module").then(
        (m) => m.SigninCheckPageModule
      ),
  },
  {
    path: "signin-security",
    loadChildren: () =>
      import("./pages/signin/signin-security/signin-security.module").then(
        (m) => m.SigninSecurityPageModule
      ),
  },
  {
    path: "signin-terms",
    loadChildren: () =>
      import("./pages/signin/signin-terms/signin-terms.module").then(
        (m) => m.SigninTermsPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
