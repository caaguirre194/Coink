import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { InstructionsComponent } from "./instructions/instructions.component";
import { FeedComponent } from "./feed/feed.component";

@NgModule({
  declarations: [HeaderComponent, InstructionsComponent, FeedComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, InstructionsComponent, FeedComponent],
})
export class ComponentsModule {}
