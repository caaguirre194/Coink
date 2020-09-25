import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-circle-progress-bar",
  templateUrl: "./circle-progress-bar.component.html",
  styleUrls: ["./circle-progress-bar.component.scss"],
})
export class CircleProgressBarComponent implements OnInit {
  /**
   * Graph percent
   */
  @Input() PERCENT;

  /**
   * Graph size
   */
  @Input() SIZE;

  /**
   * Graph color
   */
  @Input() COLOR;

  /**
   * Graph arc length
   */
  public PI_DOBLE: number = 2 * Math.PI;

  /**
   * Graph border size
   */
  @Input() STROKE;

  constructor() {}

  ngOnInit() {}
}
