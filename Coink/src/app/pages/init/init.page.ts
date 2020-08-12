import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-init",
  templateUrl: "./init.page.html",
  styleUrls: ["./init.page.scss"],
})
export class InitPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() {}

  ngOnInit() {}
}
