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
  value: string;
  description: string;

  numberGroups = [];

  constructor(public router: Router, public routerA: ActivatedRoute) {
    this.phone = this.routerA.snapshot.paramMap.get("phone");
    this.description =
      "Digita el código que recibiste vía <b>mensaje de texto</b> al " +
      this.phone;
    this.state = "btn--disabled";
    //this.phone = "3105684411";
    this.value = "";

    this.numberGroups = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
  }

  addNumber(symbol) {
    if (this.value.length < 4) {
      if (this.value.length === 3) {
        this.state = "btn--enabled";
      }
      this.value += symbol;
    }
  }

  removeNumber() {
    this.value = this.value.slice(0, -1);
    this.state = "btn--disabled";
  }

  sendCode() {
    this.router.navigate(["/signin-info"]);
  }

  ngOnInit() {}
}
