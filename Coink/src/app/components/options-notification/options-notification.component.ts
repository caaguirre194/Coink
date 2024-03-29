import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Notification } from "../../models/Notification";

@Component({
  selector: "app-options-notification",
  templateUrl: "./options-notification.component.html",
  styleUrls: ["./options-notification.component.scss"],
})
export class OptionsNotificationComponent implements OnInit {
  /**
   * Notification
   */
  @Input() notification: Notification;

  /**
   * Text accept notification
   */
  @Input() textAccept;

  /**
   * Text decline notification
   */
  @Input() textDecline;

  /**
   * Notification response
   */
  @Output() valueResponse = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  /**
   * Notification is accepted
   */
  acceptNotification() {
    this.valueResponse.emit("accept");
  }

  /**
   * Notification is canceled
   */
  cancelNotification() {
    this.valueResponse.emit("cancel");
  }
}
