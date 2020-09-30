import { Component, OnInit } from "@angular/core";
import { Limits } from "../../../models/Limits";
import { LimitsByOp, ListLimitsByOp } from "../../../models/Money/LimitsByOp";

@Component({
  selector: "app-limits-and-tops",
  templateUrl: "./limits-and-tops.page.html",
  styleUrls: ["./limits-and-tops.page.scss"],
})
export class LimitsAndTopsPage implements OnInit {
  public limits: Limits[] = [];

  public limitByOpReval: LimitsByOp = {
    min_amount_per_op: 0,
    max_amount_per_op: 0,
    max_times_in_interval: 0,
    in_interval: "0.00:00:00",
    operation_id: 0,
    cash_direction: 0,
    operation_description: "",
  };

  public limitByOpTransferencia: LimitsByOp = {
    min_amount_per_op: 0,
    max_amount_per_op: 0,
    max_times_in_interval: 0,
    in_interval: "0.00:00:00",
    operation_id: 0,
    cash_direction: 0,
    operation_description: "",
  };

  /**
   * Limits by Op
   */
  public limitsByOp: ListLimitsByOp = [];

  public caps: any = {
    deposit_top: 0,
    deposit_top_percentage: 1,
    transaction_top: 0,
    transaction_top_percentage: 1,
  };
  constructor() {}

  ngOnInit() {
    this.limitsByOp = [
      {
        cash_direction_id: 1,
        in_interval: "1.00:00:00",
        max_amount_per_op: 200000,
        max_times_in_interval: 3,
        min_amount_per_op: 0,
        operation_description: "Retiro Corresponsal No Propio",
        operation_id: 1,
      },
    ];
    this.limitByOpReval = {
      cash_direction_id: 1,
      in_interval: "1.00:00:00",
      max_amount_per_op: 200000,
      max_times_in_interval: 3,
      min_amount_per_op: 0,
      operation_description: "Retiro Corresponsal No Propio",
      operation_id: 1,
    };
    this.limitByOpTransferencia = {
      cash_direction: 0,
      in_interval: "0.00:00:00",
      max_amount_per_op: 0,
      max_times_in_interval: 0,
      min_amount_per_op: 0,
      operation_description: "",
      operation_id: 0,
    };

    this.caps = {
      deposit_top: 1606662,
      deposit_top_percentage: 72,
      status: 200,
      transaction_top: 2227550,
      transaction_top_percentage: 100,
    };

    this.limits = [
      {
        top_type_id: 1,
        top_type_description: "Retiros en Efectivo",
        top_value: 500000,
      },
      {
        top_type_id: 2,
        top_type_description: "Transferencias Coink",
        top_value: 500000,
      },
      {
        top_type_id: 5,
        top_type_description: "Retiro Para Pago",
        top_value: 500000,
      },
    ];
  }

  trackBy(name: string = "id") {
    let split = name.split(".");
    return (index, item) => {
      let ind: any = item;

      for (var i = split.length - 1; i >= 0; i--) {
        ind = item[split[i]];
      }

      return ind;
    };
  }
}
