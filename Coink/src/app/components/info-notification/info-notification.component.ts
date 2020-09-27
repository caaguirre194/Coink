import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Notification } from "../../models/Notification";

@Component({
  selector: "app-info-notification",
  templateUrl: "./info-notification.component.html",
  styleUrls: ["./info-notification.component.scss"],
})
export class InfoNotificationComponent implements OnInit {
  /**
   * Notification
   */
  @Input() notification: Notification;

  /**
   * Notification button text
   */
  @Input() textAbout: string;

  /**
   * Notification response
   */
  @Output() valueResponse = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  /**
   * Notification is opened
   */
  openNotification() {
    this.valueResponse.emit("open");
  }

  /**
   * Notification is deleted
   */
  deleteNotification() {
    this.valueResponse.emit("delete");
  }
}
