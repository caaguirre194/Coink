import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  private notifications: any;

  getNotifications() {
    this.notifications = [
      {
        NotificationTitle: "Carlos",
        NotificationTypeDescription: "Te ha solicitado",
        NnotificationValue: "10000",
        NotificationStatus: true,
        NotificationStatusId: "200",
        NotificationTypeId: 1,
        NotificationDate: "12/12/2020",
        NotificationSubject: "Acá va el asunto que la persona puso",
      },
      {
        NotificationTitle: "Tu nueva tarjeta Visa",
        NotificationTypeDescription:
          "Ya puedes activar tu tarjeta Visa Coink digital o física, ahorra con Coink y gana beneficios con Visa.",
        NotificationStatus: true,
        NotificationStatusId: "200",
        NotificationTypeId: 2,
      },
    ];
  }

  acceptNotification(notification: any) {
    console.log("Se Acepta ", notification);
  }

  cancelNotification(notification: any) {
    console.log("Se Rechaza ", notification);
  }

  deleteNotification(notification: any) {
    console.log("Se Elimina ", notification);
  }

  openNotification(notification: any) {
    console.log("Se Abre ", notification);
  }

  ngOnInit() {
    this.getNotifications();
  }

  exit() {
    this.modalCtrl.dismiss();
  }
}
