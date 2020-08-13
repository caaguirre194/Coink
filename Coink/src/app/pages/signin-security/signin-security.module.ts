import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninSecurityPageRoutingModule } from "./signin-security-routing.module";

import { SigninSecurityPage } from "./signin-security.page";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    SigninSecurityPageRoutingModule,
  ],
  declarations: [SigninSecurityPage],
})
export class SigninSecurityPageModule {}
