import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-circle-progress-bar",
  templateUrl: "./circle-progress-bar.component.html",
  styleUrls: ["./circle-progress-bar.component.scss"],
})
export class CircleProgressBarComponent implements OnInit {
  @Input() PERCENT;
  @Input() SIZE;
  @Input() COLOR;
  /**
   * Size the canvas
   * @type {number}
   */
  public PI_DOBLE: number = 2 * Math.PI;
  /**
   * Size the canvas
   * @type {number}
   */
  @Input() STROKE;

  constructor() {}

  ngOnInit() {}
}
