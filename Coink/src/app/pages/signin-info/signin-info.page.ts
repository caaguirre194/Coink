import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { presentSimpleAlert } from "../../common/alert.notification";

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

    if (this.valdateForm()) {
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
    } else {
      presentSimpleAlert(
        "Algo pasa",
        "Los datos que pusiste están incompletos, revisa y vuelve a intentarlo",
        "VOLVER A INTENTAR"
      );
    }
  }

  valdateForm() {
    if (
      this.todo.value.document_number !== "" &&
      this.todo.value.document_type !== "" &&
      this.todo.value.expedition_date !== "" &&
      this.todo.value.birth_date !== "" &&
      this.todo.value.gender !== ""
    ) {
      return true;
    } else {
      return false;
    }
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
