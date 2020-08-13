import { Component, OnInit, EventEmitter } from "@angular/core";
import { isNumber } from "util";
import { Router } from "@angular/router";

import {
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  NgControl,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-signin-phone",
  templateUrl: "./signin-phone.page.html",
  styleUrls: ["./signin-phone.page.scss"],
})
export class SigninPhonePage implements OnInit {
  form: FormGroup;
  state: string;
  value: string;

  numberGroups = [];

  constructor(public router: Router, fb: FormBuilder) {
    this.state = "btn--disabled";
    this.value = "";

    this.numberGroups = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    this.form = fb.group({
      phone: [""],
    });
  }

  addNumber(symbol) {
    if (this.value.length < 10) {
      if (this.value.length === 9) {
        this.state = "btn--enabled";
      }
      this.value += symbol;
    }
  }

  removeNumber() {
    this.value = this.value.slice(0, -1);
    this.state = "btn--disabled";
  }

  onChangePhone(code: string) {
    this.value = code;
  }

  sendPhone() {
    this.router.navigate([
      "/signin-code",
      {
        phone: this.value,
      },
    ]);
  }

  ngOnInit() {}
}
