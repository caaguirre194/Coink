import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin-check",
  templateUrl: "./signin-check.page.html",
  styleUrls: ["./signin-check.page.scss"],
})
export class SigninCheckPage implements OnInit {
  first_name: string;
  second_name: string;
  first_last_name: string;
  second_last_name: string;
  gender: string;

  constructor(public router: Router, public routerA: ActivatedRoute) {
    this.first_name = this.routerA.snapshot.paramMap.get("first_name");
    this.second_name = this.routerA.snapshot.paramMap.get("second_name");
    this.first_last_name = this.routerA.snapshot.paramMap.get(
      "first_last_name"
    );
    this.second_last_name = this.routerA.snapshot.paramMap.get(
      "second_last_name"
    );
    this.gender = this.routerA.snapshot.paramMap.get("gender");
  }

  ngOnInit() {}

  confirmCheck() {
    this.router.navigate(["/signin-security"]);
  }

  cancelCheck() {}
}
