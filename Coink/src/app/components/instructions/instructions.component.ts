import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-instructions",
  templateUrl: "./instructions.component.html",
  styleUrls: ["./instructions.component.scss"],
})
export class InstructionsComponent implements OnInit {
  @Input() image: any;
  @Input() title: any;
  @Input() description: any;

  constructor() {}

  ngOnInit() {}
}
