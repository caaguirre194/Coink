import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  private ALERTS = {
    "informacion-limites:1": {
      title: "LÍMITES DE CUENTA",
      cssClass: "alert-information-cofre-detalle-green",
      message:
        "Tú tipo de cuenta está sujeta por ley a unos límites en tu saldo y en el total que puedes debitar cada mes calendario. <br><br> Para más información, ingresa a Ajustes > Mi cuenta y consulta tu contrato de depósito electrónico.",
    },
    "informacion-limites:2": {
      title: "LÍMITES DE DEPÓSITO",
      cssClass: "alert-information-cofre-detalle",
      message:
        "Para cumplir la ley y para que no tengas que pagar el 4x1000, el saldo de tú cuenta tiene un límite de 65 unidades de valor tributario (uvt). <br><br> Para más información, ingresa a Ajustes > Mi cuenta y consulta tu contrato de depósito electrónico.",
    },
    "informacion-limites:3": {
      title: "LÍMITES DE DÉBITOS",
      cssClass: "alert-information-cofre-detalle",
      message:
        "Para cumplir la ley y para que no tengas que pagar el 4x1000, la suma en pesos de todos los débitos que realices en un mes calendario tiene un límite de 65 unidades de valor tributario (uvt). <br><br> Para más información, ingresa a Ajustes > Mi cuenta y consulta tu contrato de depósito electrónico.",
    },
    "informacion-limites:4": {
      title: "TOPES DE TU CUENTA",
      cssClass: "alert-information-cofre-detalle-green",
      message:
        "Estos topes fijan el valor máximo que puedes hacer por cada operación. <br><br> Ten en cuenta los límites legales de tu cuenta cuando estés modificando estos topes.",
    },
    "informacion-limites:5": {
      title: "LÍMITES DE TRANSFERENCIAS A OTRAS ENTIDADES",
      cssClass: "alert-information-cofre-detalle-green",
      message:
        "Estos topes los fijas tú y establecen el valor máximo que puedes hacer por cada transferencia a cuentas de otras entidades. <br><br> Ten en cuenta los límites legales de tu cuenta cuando estés modificando estos topes.",
    },
    "informacion-limites:6": {
      title: "LÍMITES DE RETIROS EN OTRAS REDES",
      cssClass: "alert-information-cofre-detalle-green",
      message:
        "Estos topes los fijas tú y establecen el valor máximo de dinero que puedes retirar en otras redes de corresponsalía. <br><br> Ten en cuenta los límites legales de tu cuenta cuando estés modificando estos topes.",
    },
    "error:limites": {
      title: "Se ha presentado un inconveniente",
      cssClass: "error-alert",
      buttons: [
        {
          text: "Volver",
          role: "cancel",
        },
      ],
    },
    "error:fails": {
      title: "Hubo un error",
      message: "Por favor vuelve a intentarlo más tarde.",
      buttons: [
        {
          text: "Volver a intentarlo",
          role: "cancel",
        },
      ],
    },
    "error:generico": {
      title: "Se ha presentado un inconveniente",
      cssClass: "error-alert",
      message: "No se ha compleado la operación. Intenta más tarde.",
      buttons: [
        {
          text: "Volver",
          role: "cancel",
        },
      ],
    },
  };

  constructor(private alertController: AlertController) {}

  async presentAlert(alertName: string) {
    let alertOptions = {};
    if (
      this.ALERTS[alertName] === undefined ||
      this.ALERTS[alertName] === null
    ) {
      alertOptions = {
        cssClass: this.ALERTS["error:generico"].cssClass,
        header: this.ALERTS["error:generico"].title,
        message: this.ALERTS["error:generico"].message,
        buttons: this.ALERTS["error:generico"].buttons,
      };
    } else {
      alertOptions = {
        cssClass: this.ALERTS[alertName].cssClass,
        header: this.ALERTS[alertName].title,
        subHeader: this.ALERTS[alertName].subtitle,
        message: this.ALERTS[alertName].message,
        buttons:
          this.ALERTS[alertName].buttons !== undefined
            ? this.ALERTS[alertName].buttons
            : [" "],
      };
    }

    const alert = await this.alertController.create(alertOptions);
    await alert.present();
  }
}
