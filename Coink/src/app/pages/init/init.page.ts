import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(public router: Router) {}

  ngOnInit() {}

  goLogin() {}

  goSignIn() {
    this.router.navigate(["/signin-phone"]);
  }
}
