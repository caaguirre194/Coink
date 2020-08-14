import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { presentSimpleAlert } from "../../common/alert.notification";

@Component({
  selector: "app-signin-security",
  templateUrl: "./signin-security.page.html",
  styleUrls: ["./signin-security.page.scss"],
})
export class SigninSecurityPage implements OnInit {
  private todo: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.todo = fb.group({
      email: [""],
      r_email: [""],
      pin: [""],
      r_pin: [""],
    });
  }

  logForm() {
    if (this.validate()) {
      this.router.navigate(["/signin-terms"]);
    } else {
      presentSimpleAlert(
        "Algo pasa",
        "Los datos que pusiste no coinciden, revisa y vuelve a intentarlo",
        "VOLVER A INTENTAR"
      );
    }
  }

  validate() {
    if (
      this.valdateForm() &&
      this.validateEmail(this.todo.value.email) &&
      this.compareValues(this.todo.value.email, this.todo.value.r_email) &&
      this.compareValues(this.todo.value.pin, this.todo.value.r_pin)
    ) {
      return true;
    } else {
      return false;
    }
  }

  validateEmail(search: string) {
    let serchfind: boolean;
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    serchfind = regexp.test(search.trim());
    return serchfind;
  }

  compareValues(val1: string, val2: string) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  }

  valdateForm() {
    if (
      this.todo.value.email !== "" &&
      this.todo.value.r_email !== "" &&
      this.todo.value.pin !== "" &&
      this.todo.value.r_pin !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {}
}
