import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-options-notification",
  templateUrl: "./options-notification.component.html",
  styleUrls: ["./options-notification.component.scss"],
})
export class OptionsNotificationComponent implements OnInit {
  @Input() title;
  @Input() description;
  @Input() date;
  @Input() subject;
  @Input() value;
  @Input() textAccept;
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
