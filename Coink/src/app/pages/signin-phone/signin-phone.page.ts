import { Component, OnInit, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { CoinkService } from "../../services/coink.service";
import { presentSimpleAlert } from "../../common/alert.notification";

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
  phoneNumber: string;

  numberGroups = [];

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private coinkService: CoinkService
  ) {
    this.state = "btn--disabled";
    this.phoneNumber = "";

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
    if (this.phoneNumber.length < 10) {
      if (this.phoneNumber.length === 9) {
        this.state = "btn--enabled";
      }
      this.phoneNumber += symbol;
    }
  }

  async presentAlertInvalidPhone() {
    const phomeNumber = [
      this.phoneNumber.slice(0, 4),
      "-",
      this.phoneNumber.slice(4),
    ].join("");
    const textInvalidPhone = `El número  <b class="bold">${phomeNumber}</b>  ya está asociado a otro usuario.`;

    presentSimpleAlert("Error", textInvalidPhone, "VOLVER");
  }

  removeNumber() {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
    this.state = "btn--disabled";
  }

  onChangePhone(code: string) {
    this.phoneNumber = code;
  }

  validate() {
    this.presentAlertInvalidPhone();
  }

  sendPhone() {
    this.validate();
    /*this.router.navigate([
      "/signin-code",
      {
        phone: this.phoneNumber,
      },
    ]);*/
  }

  ngOnInit() {
    console.log(
      this.coinkService.encrypt(
        JSON.stringify(this.coinkService.jsonTest),
        this.coinkService.secretKey
      )
    );
  }
}
