import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninPageRoutingModule } from "./signin-routing.module";

import { SigninPage } from "./signin.page";
import { ComponentsModule } from "../../components/components.module";
import { PhoneMaskDirective } from "../../common/phone-mask.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SigninPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SigninPage, PhoneMaskDirective],
})
export class SigninPageModule {}
