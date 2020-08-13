import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-signin-info",
  templateUrl: "./signin-info.page.html",
  styleUrls: ["./signin-info.page.scss"],
})
export class SigninInfoPage implements OnInit {
  private todo: FormGroup;

  someModel = null;
  selectables = [1, 2, 3];

  logForm() {
    console.log(this.todo.value);
  }

  constructor(public fb: FormBuilder) {
    /* this.todo = fb.group({
      document_type: ["", Validators.required],
      document_number: ["", Validators.required],
      expedition_date: ["", Validators.required],
      birth_date: ["", Validators.required],
      gender: ["", Validators.required],
    });*/
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
