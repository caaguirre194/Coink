import { Component, OnInit } from "@angular/core";
import { isNumber } from "util";

@Component({
  selector: "app-signin-phone",
  templateUrl: "./signin-phone.page.html",
  styleUrls: ["./signin-phone.page.scss"],
})
export class SigninPhonePage implements OnInit {
  value = "0";
  oldValue = "0";

  lastOperator = "x";
  readyForNewInput = true;
  numberGroups = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  onButtonPress(symbol) {
    console.log(symbol);

    if (isNumber(symbol)) {
      console.log("is a number");
      if (this.readyForNewInput) this.value = "" + symbol;
      else this.value += "" + symbol;
      this.readyForNewInput = false;
    } else if (symbol === "c") {
      this.value = "0";
      this.readyForNewInput = true;
    } else if (symbol === "=") {
      if (this.lastOperator === "x")
        this.value = "" + parseInt(this.oldValue) * parseInt(this.value);
      else if (this.lastOperator === "-")
        this.value = "" + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === "+")
        this.value = "" + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === "/")
        this.value = "" + parseInt(this.oldValue) / parseInt(this.value);
      this.readyForNewInput = true;
    } else {
      // operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }

  constructor() {}

  ngOnInit() {}
}
