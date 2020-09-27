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
  @Input() PERCENT: number;

  /**
   * Graph size
   */
  @Input() SIZE: number;

  /**
   * Graph border size
   */
  @Input() STROKE: number;

  /**
   * Graph color
   */
  @Input() COLOR: string;

  /**
   * Graph arc length
   */
  public PI_DOBLE: number = 2 * Math.PI;

  constructor() {}

  ngOnInit() {}
}
