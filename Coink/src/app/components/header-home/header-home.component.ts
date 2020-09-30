import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-home",
  templateUrl: "./header-home.component.html",
  styleUrls: ["./header-home.component.scss"],
})
export class HeaderHomeComponent implements OnInit {
  @Input() title: any;
  constructor() {}

  ngOnInit() {}
}
