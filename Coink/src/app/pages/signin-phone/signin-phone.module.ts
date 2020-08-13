import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninPhonePageRoutingModule } from "./signin-phone-routing.module";

import { SigninPhonePage } from "./signin-phone.page";
import { ComponentsModule } from "../../components/components.module";
import { PhoneMaskDirective } from "../../common/phone-mask.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SigninPhonePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SigninPhonePage, PhoneMaskDirective],
})
export class SigninPhonePageModule {}
