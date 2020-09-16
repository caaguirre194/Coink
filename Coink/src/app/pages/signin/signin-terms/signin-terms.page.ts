import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin-terms",
  templateUrl: "./signin-terms.page.html",
  styleUrls: ["./signin-terms.page.scss"],
})
export class SigninTermsPage implements OnInit {
  isChecked: any;

  constructor(public router: Router) {}

  ngOnInit() {}

  finalize() {
    this.router.navigate(["/home"]);
  }
}
