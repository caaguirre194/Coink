import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SigninCheckPageRoutingModule } from "./signin-check-routing.module";

import { SigninCheckPage } from "./signin-check.page";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SigninCheckPageRoutingModule,
  ],
  declarations: [SigninCheckPage],
})
export class SigninCheckPageModule {}
