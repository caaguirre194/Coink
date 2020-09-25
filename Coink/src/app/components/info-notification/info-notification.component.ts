import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info-notification",
  templateUrl: "./info-notification.component.html",
  styleUrls: ["./info-notification.component.scss"],
})
export class InfoNotificationComponent implements OnInit {
  @Input() title;
  @Input() subtitle;
  @Input() PERCENT;

  constructor() {}

  ngOnInit() {}
}
