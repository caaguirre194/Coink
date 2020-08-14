import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin-code",
  templateUrl: "./signin-code.page.html",
  styleUrls: ["./signin-code.page.scss"],
})
export class SigninCodePage implements OnInit {
  phone: any;
  state: string;
  code: string;
  description: string;

  numberGroups = [];

  constructor(public router: Router, public routerA: ActivatedRoute) {
    this.phone = this.routerA.snapshot.paramMap.get("phone");
    this.description =
      "Digita el código que recibiste vía <b>mensaje de texto</b> al " +
      this.phone;
    this.state = "btn--disabled";
    this.code = "";

    this.numberGroups = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  }

  addNumber(symbol) {
    if (this.code.length < 4) {
      if (this.code.length === 3) {
        this.state = "btn--enabled";
      }
      this.code += symbol;
    }
  }

  removeNumber() {
    this.code = this.code.slice(0, -1);
    this.state = "btn--disabled";
  }

  validateCode() {
    if (this.code.length === 4) {
      this.router.navigate(["/signin-info"]);
    }
  }

  ngOnInit() {}

  refreshCode() {}
}
