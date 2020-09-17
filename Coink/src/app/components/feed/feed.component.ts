import { Component, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  public show: boolean = false;
  /**
   * Strings to creator
   * @type {any}
   */
  public str: any;
  /**
   * Size the canvas
   * @type {number}
   */
  public SIZE: number = 100;
  /**
   * Size the canvas
   * @type {number}
   */
  public STROKE: number = 10;
  /**
   * Size the canvas
   * @type {number}
   */
  public PI_DOBLE: number = 2 * Math.PI;
  /**
   * The month
   * @type {string}
   */
  public month: string = "";
  /**
   * Format the date
   * @type {string}
   */
  public formatDate: string = "";
  s;

  /**
   * ID
   */
  @Input() id: string = "";
  /**
   * Type
   */
  @Input() type: number = 0;
  /**
   * Description
   */
  @Input() description: string = "";
  /**
   * Date create
   * @type {string | Date}
   */
  @Input() date: string | Date = new Date();
  /**
   * The data gets
   * @param {Object}
   */
  @Input() data: any = {};
  /**
   * The data gets
   * @param {Object}
   */
  @Input() select: string = "home";

  @Input() action: boolean = false;

  constructor() {}

  ngOnInit() {}
}
