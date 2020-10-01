import { Component, OnInit } from "@angular/core";
import { Limits } from "../../../models/Limits";
import { LimitsByOp, ListLimitsByOp } from "../../../models/Money/LimitsByOp";
import { AlertService } from "../../../common/alert.service";
import { LoaderService } from "../../../common/loader.service";
import { RequestLimitsByOp } from "../../../models/Money/RequestLimitsByOp";

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

  public element: HTMLElement;

  constructor(
    private loaderService: LoaderService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loaderService.showLoader();

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

    setTimeout(() => {
      this.loaderService.hideLoader();
    }, 1500);
  }

  /**
   * Edit the limit
   */
  edit(limit: Limits) {
    this.alertService.presentAlertWithOptions({
      header: limit.top_type_description,
      message: " ",
      id: "limitId",
      inputs: [
        {
          type: "number",
          placeholder: "Nuevo valor",
          name: "limit",
          id: "limit",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "btnSave",
        },
        {
          text: "Cambiar",
          handler: (data: any) => {
            if (!this.isNumber(data["limit"])) {
              try {
                this.element = document.getElementsByClassName(
                  "alert-message"
                )[0] as HTMLElement;
                this.element.innerHTML =
                  "<span style='color: red'>Solo se permiten números</span>";
                return false;
              } catch (error) {
                console.error(error);
              }
              return false;
            }
            if (data["limit"] != limit.top_value) {
              /**return this.loading
                .present()
                .then(
                  async () =>
                    await this.money.setLimits(
                      limit.top_type_id,
                      data.limit >= 0 ? data.limit : data.limit * -1
                    )
                )
                .then(
                  async () =>
                    await this.money.getLimits().then(this.dataSet("limits"))
                )
                .then(() => this.loadingDismiss())
                .then(() => alert.dismiss())
                .catch((e) => {
                  if (ENV.logger) {
                    console.error("limits-and-tops", e);
                  }
                  const error = JSON.parse(e._body);
                  switch (error.code) {
                    case "SIMPLIFIED_TOP_EXCEEDED":
                      let tittle = "Hay un problema";
                      let message =
                        "Tus topes por transacción no pueden superar los límites legales que aplican para tu cuenta.";
                      this.showAlertMessage(message, tittle);
                      this.loadingDismiss();
                      break;
                    default:
                      this.loadingDismiss(limit.top_type_description);
                      break;
                  }
                });**/
            }
            this.element = document.getElementsByClassName(
              "alert-message"
            )[0] as HTMLElement;
            this.element.innerHTML =
              "<span style='color: red'>Ingresa un valor distinto a tu tope actual</span>";
            return false;
          },
        },
      ],
    });
  }

  public editLimitsBy(type: string) {
    switch (type) {
      case "MONTO_MAXIMO_REVAL":
        this.showAlertEdit(
          "REVAL",
          "Monto máximo por transacción de retiro en red REVAL",
          " ",
          "monto_maximo_reval",
          "number",
          "Ingresa el monto",
          "monto_maximo_reval",
          "monto_maximo_reval",
          "btnSave"
        );
        break;
      case "RETIROS_MAXIMOS_POR_DIA_REVAL":
        this.showAlertEdit(
          "REVAL",
          "Retiros máximos por día en red REVAL",
          " ",
          "retiro_maximo_reval",
          "number",
          "Ingresa el valor",
          "retiro_maximo_reval",
          "retiro_maximo_reval",
          "btnSave"
        );
        break;
      case "MONTO_MAXIMO_TRANSFERENCIA":
        this.showAlertEdit(
          "TRANSFERENCIA",
          "Monto máximo para transferencias",
          " ",
          "monto_maximo_transferencia",
          "number",
          "Ingresa el valor",
          "monto_maximo_transferencia",
          "monto_maximo_transferencia",
          "btnSave"
        );
        break;
      case "CANTIDAD_MAXIMA_POR_DIA_TTRANSFERENCIA":
        this.showAlertEdit(
          "TRANSFERENCIA",
          "Cantidad máxima de transacciones",
          " ",
          "cantidad_maxima_transferencia",
          "number",
          "Ingresa el valor",
          "cantidad_maxima_transferencia",
          "cantidad_maxima_transferencia",
          "btnSave"
        );
        break;
      default:
        break;
    }
  }

  public showAlertEdit(
    operationType: string,
    title: string,
    message_: string,
    id_: string,
    type_: string,
    placeholder_: string,
    name_: string,
    idInput: string,
    cssClass_: string
  ) {
    this.alertService.presentAlertWithOptions({
      header: title,
      message: message_,
      id: id_,
      inputs: [
        {
          type: type_,
          placeholder: placeholder_,
          name: name_,
          id: idInput,
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: cssClass_,
        },
        {
          text: "Cambiar",
          handler: (data: any) => {
            if (data.cantidad_maxima_transferencia != null) {
              if (Number(data.retiro_maximo_reval) > 99) {
                try {
                  this.element = document.getElementsByClassName(
                    "alert-message"
                  )[0] as HTMLElement;
                  this.element.innerHTML =
                    "<span style='color: red'>El número máximo permitido es 99.</span>";
                  return false;
                } catch (error) {}
                return false;
              }
            }

            if (data.monto_maximo_transferencia != null) {
              if (Number(data.monto_maximo_reval) > 999999999) {
                try {
                  this.element = document.getElementsByClassName(
                    "alert-message"
                  )[0] as HTMLElement;
                  this.element.innerHTML =
                    "<span style='color: red'>Este valor supera el máximo permitido.</span>";
                  return false;
                } catch (error) {}
                return false;
              }
            }

            if (data.retiro_maximo_reval != null) {
              if (Number(data.retiro_maximo_reval) > 99) {
                try {
                  this.element = document.getElementsByClassName(
                    "alert-message"
                  )[0] as HTMLElement;
                  this.element.innerHTML =
                    "<span style='color: red'>El número máximo permitido es 99.</span>";
                  return false;
                } catch (error) {}
                return false;
              }
            }

            if (data.monto_maximo_reval != null) {
              if (Number(data.monto_maximo_reval) > 999999999) {
                try {
                  this.element = document.getElementsByClassName(
                    "alert-message"
                  )[0] as HTMLElement;
                  this.element.innerHTML =
                    "<span style='color: red'>Este valor supera el máximo permitido.</span>";
                  return false;
                } catch (error) {}
                return false;
              }
            }

            if (!this.isNumber(data[idInput])) {
              try {
                this.element = document.getElementsByClassName(
                  "alert-message"
                )[0] as HTMLElement;
                this.element.innerHTML =
                  "<span style='color: red'>Solo se permiten números</span>";
                return false;
              } catch (error) {}
              return false;
            }

            // Init
            var aux: RequestLimitsByOp = {
              operations_limits: [
                {
                  min_amount_per_op: null,
                  max_amount_per_op: 0,
                  max_times_in_interval: 0,
                  in_interval: null,
                  operation_id: 0,
                },
              ],
            };

            if (operationType == "REVAL") {
              if (data.retiro_maximo_reval != null) {
                if (data.retiro_maximo_reval <= 0) {
                  data.retiro_maximo_reval * -1;
                }
              } else {
                data.retiro_maximo_reval = this.limitByOpReval.max_times_in_interval;
              }

              if (data.monto_maximo_reval != null) {
                if (data.monto_maximo_reval <= 0) {
                  data.monto_maximo_reval * -1;
                }
              } else {
                data.monto_maximo_reval = this.limitByOpReval.max_amount_per_op;
              }

              aux.operations_limits[0].min_amount_per_op = null;
              aux.operations_limits[0].max_amount_per_op =
                data.monto_maximo_reval;
              aux.operations_limits[0].max_times_in_interval =
                data.retiro_maximo_reval;
              aux.operations_limits[0].in_interval = null;
              aux.operations_limits[0].operation_id = 1;
            } else if (operationType == "TRANSFERENCIA") {
              if (data.cantidad_maxima_transferencia != null) {
                if (data.cantidad_maxima_transferencia <= 0) {
                  data.cantidad_maxima_transferencia * -1;
                }
              } else {
                data.cantidad_maxima_transferencia = this.limitByOpTransferencia.max_times_in_interval;
              }

              if (data.monto_maximo_transferencia != null) {
                if (data.monto_maximo_transferencia <= 0) {
                  data.monto_maximo_transferencia * -1;
                }
              } else {
                data.monto_maximo_transferencia = this.limitByOpTransferencia.max_amount_per_op;
              }

              aux.operations_limits[0].min_amount_per_op = null;
              aux.operations_limits[0].max_amount_per_op =
                data.monto_maximo_transferencia;
              aux.operations_limits[0].max_times_in_interval =
                data.cantidad_maxima_transferencia;
              aux.operations_limits[0].in_interval = null;
              aux.operations_limits[0].operation_id = 4;
            }

            /**   return this.loading
              .present()
              .then(async () => await this.setLimitReval(aux))
              .then(
                async () =>
                  await this.money
                    .getLimitsByOp()
                    .then(this.dataSet("limitsByOp"))
              )
              .then(async () => await this.setInputsBy(1))
              .then(() => this.loadingDismiss())
              .then(() => alert.dismiss())
              .catch((error) => {
                this.loadingDismiss();
                const e = JSON.parse(error._body);
                switch (e.code) {
                  case "LIMIT_EXCEEDED":
                    this.showAlertInfoError(true, "error:limites", e.message);
                    break;
                  default:
                    this.showAlertInfoError(false, "error:generico");
                    break;
                }
              });**/
          },
        },
      ],
    });
  }

  /**
   * Muestra popup de información
   */
  showPopupInfo(type: number) {
    this.alertService.presentAlert(`informacion-limites:${type}`);
  }

  public isNumber(str: any) {
    const valueNumber = str >>> 0 === parseFloat(str);
    if (valueNumber) {
      if (/[^a-zA-Z0-9\-\/]/.test(str)) {
        return false;
      }
      return true;
    }
    return false;
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
