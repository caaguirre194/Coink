import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninInfoPageRoutingModule } from "./signin-info-routing.module";

import { SigninInfoPage } from "./signin-info.page";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    SigninInfoPageRoutingModule,
  ],
  declarations: [SigninInfoPage],
})
export class SigninInfoPageModule {}
