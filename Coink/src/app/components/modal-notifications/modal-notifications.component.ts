import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal-notifications",
  templateUrl: "./modal-notifications.component.html",
  styleUrls: ["./modal-notifications.component.scss"],
})
export class ModalNotificationsComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  exit() {
    this.modalCtrl.dismiss();
  }
}
