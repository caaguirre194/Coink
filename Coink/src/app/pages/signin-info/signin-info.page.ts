import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { presentSimpleAlert } from "../../common/alert.notification";
import { CoinkService } from "../../services/coink.service";

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
      // this.coinkService
      //   .signup(
      //     this.todo.value.document_number,
      //     this.todo.value.document_type,
      //     this.todo.value.expedition_date,
      //     this.todo.value.birth_date
      //   )
      //   .then((data) => {
      //     this.router.navigate([
      //       "/signin-check",
      //       {
      //         first_name: data["first_name"],
      //         second_name: data["second_name"],
      //         first_last_name: data["first_last_name"],
      //         second_last_name: data["second_last_name"],
      //         gender: data["gender"],
      //       },
      //     ]);
      //   })
      //   .catch((error) => {
      //     this.presentAlertInvalidDocument();
      //   });
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

  async presentAlertInvalidDocument() {
    const textInvalidPhone = `El número  de documento <b class="bold">${this.todo.value.document_number}</b>  ya está asociado a otro usuario.`;

    presentSimpleAlert("Error", textInvalidPhone, "VOLVER");
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

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private coinkService: CoinkService
  ) {
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
