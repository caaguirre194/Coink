import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninPhonePageRoutingModule } from "./signin-phone-routing.module";

import { SigninPhonePage } from "./signin-phone.page";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPhonePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SigninPhonePage],
})
export class SigninPhonePageModule {}
