import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-info-notification",
  templateUrl: "./info-notification.component.html",
  styleUrls: ["./info-notification.component.scss"],
})
export class InfoNotificationComponent implements OnInit {
  /**
   * Notification title
   */
  @Input() title: string;

  /**
   * Notification title
   */
  @Input() description: string;

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
