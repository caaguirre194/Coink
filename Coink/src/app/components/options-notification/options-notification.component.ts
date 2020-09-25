import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-options-notification",
  templateUrl: "./options-notification.component.html",
  styleUrls: ["./options-notification.component.scss"],
})
export class OptionsNotificationComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  @Input() date;
  @Input() subject;
  @Input() value;
  @Input() textAccept;
  @Input() textDecline;

  constructor() {}

  ngOnInit() {}
}
