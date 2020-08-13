import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin-info",
  templateUrl: "./signin-info.page.html",
  styleUrls: ["./signin-info.page.scss"],
})
export class SigninInfoPage implements OnInit {
  private todo: FormGroup;

  logForm() {
    const responseTest = {
      first_name: "Carlos",
      second_name: "Andrés",
      first_last_name: "Aguirre",
      second_last_name: "Cañas",
      gender: "Masculino",
    };

    console.log(this.todo.value);
    this.router.navigate([
      "/signin-check",
      {
        first_name: "Carlos",
        second_name: "Andrés",
        first_last_name: "Aguirre",
        second_last_name: "Cañas",
        gender: "Masculino",
      },
    ]);
  }

  constructor(public fb: FormBuilder, public router: Router) {
    this.todo = fb.group({
      document_type: [""],
      document_number: [""],
      expedition_date: [""],
      birth_date: [""],
      gender: [""],
    });
  }

  ngOnInit() {}
}
