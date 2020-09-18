import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { InstructionsComponent } from "./instructions/instructions.component";
import { CircleProgressBarComponent } from "./circle-progress-bar/circle-progress-bar.component";
import { ModalNotificationsComponent } from "./modal-notifications/modal-notifications.component";

@NgModule({
  declarations: [
    HeaderComponent,
    InstructionsComponent,
    CircleProgressBarComponent,
    ModalNotificationsComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    InstructionsComponent,
    CircleProgressBarComponent,
    ModalNotificationsComponent,
  ],
})
export class ComponentsModule {}
