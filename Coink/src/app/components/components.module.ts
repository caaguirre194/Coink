import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { InstructionsComponent } from "./instructions/instructions.component";

@NgModule({
  declarations: [HeaderComponent, InstructionsComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, InstructionsComponent],
})
export class ComponentsModule {}
