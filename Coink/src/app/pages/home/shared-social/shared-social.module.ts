import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SharedSocialPageRoutingModule } from "./shared-social-routing.module";

import { SharedSocialPage } from "./shared-social.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedSocialPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SharedSocialPage],
})
export class SharedSocialPageModule {}
