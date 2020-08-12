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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
