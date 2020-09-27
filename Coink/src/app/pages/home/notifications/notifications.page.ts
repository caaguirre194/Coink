import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Notification } from "../../../models/Notification";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  private notifications: any;

  private notifications2: Notification[];

  getNotifications() {
    this.notifications = [
      {
        NotificationTitle: "Carlos",
        NotificationTypeDescription: "Te ha solicitado",
        NotificationValue: "10000",
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

    // this.notifications2 = this.notifications.map(obj => {
    //   "title": obj.NotificationTitle,
    //   "description": obj.NotificationTypeDescription,
    //   "date": obj.NotificationDate,
    //   "subject": obj.NotificationSubject,
    //   "value": obj.NotificationValue,
    // });
    this.notifications2 = this.notifications as Notification[];
    console.log(this.notifications2);
  }

  ngOnInit() {
    this.getNotifications();
  }

  exit() {
    this.modalCtrl.dismiss();
  }

  notificationAction(notification: any, action: string) {
    switch (action) {
      case "open":
        console.log("Se Abre ", notification);
        break;
      case "delete":
        console.log("Se Elimina ", notification);
        break;
      case "accept":
        console.log("Se Acepta ", notification);
        break;
      case "cancel":
        console.log("Se Rechaza ", notification);
        break;
    }
  }
}
