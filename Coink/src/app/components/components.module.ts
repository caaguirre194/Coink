import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { InstructionsComponent } from "./instructions/instructions.component";
import { CircleProgressBarComponent } from "./circle-progress-bar/circle-progress-bar.component";
import { InfoNotificationComponent } from "./info-notification/info-notification.component";
import { OptionsNotificationComponent } from "./options-notification/options-notification.component";
import { HeaderHomeComponent } from "./header-home/header-home.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderHomeComponent,
    InstructionsComponent,
    CircleProgressBarComponent,
    InfoNotificationComponent,
    OptionsNotificationComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    HeaderHomeComponent,
    InstructionsComponent,
    CircleProgressBarComponent,
    InfoNotificationComponent,
    OptionsNotificationComponent,
  ],
})
export class ComponentsModule {}
