import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { KeyboardComponent } from "./keyboard/keyboard.component";
import { IonicModule } from "@ionic/angular";
import { InstructionsComponent } from "./instructions/instructions.component";

@NgModule({
  declarations: [HeaderComponent, KeyboardComponent, InstructionsComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, KeyboardComponent, InstructionsComponent],
})
export class ComponentsModule {}
