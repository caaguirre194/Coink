import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninCodePageRoutingModule } from "./signin-code-routing.module";

import { SigninCodePage } from "./signin-code.page";
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonicModule,
    SigninCodePageRoutingModule,
  ],
  declarations: [SigninCodePage],
})
export class SigninCodePageModule {}
