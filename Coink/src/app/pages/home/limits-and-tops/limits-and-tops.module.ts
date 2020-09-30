import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LimitsAndTopsPageRoutingModule } from "./limits-and-tops-routing.module";

import { LimitsAndTopsPage } from "./limits-and-tops.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    LimitsAndTopsPageRoutingModule,
  ],
  declarations: [LimitsAndTopsPage],
})
export class LimitsAndTopsPageModule {}
