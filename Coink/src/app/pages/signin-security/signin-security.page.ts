import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

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
    }
  }

  validate() {
    return true;
  }

  ngOnInit() {}
}
