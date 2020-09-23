import { Component, OnInit } from "@angular/core";
import { ModalController, AnimationController } from "@ionic/angular";
import { ModalNotificationsComponent } from "src/app/components/modal-notifications/modal-notifications.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  private isDay: boolean;
  private backImage: string;
  private settingsImage: string;
  private theme: string;
  private optionSelected: string;

  private goals: any;
  private notifications: any;
  private communities: any;
  private kids: any;

  private bazarItems = [
    {
      name: "Servicios",
      icon: "",
      redirectTo: "",
    },
    {
      name: "Suscripciones",
      icon: "",
      redirectTo: "",
    },
    {
      name: "Recargas",
      icon: "",
      redirectTo: "",
    },
    {
      name: "Marketplace",
      icon: "",
      redirectTo: "",
    },
  ];

  private balance = {
    oink: "assets/img/home/oinks/oink-main.png",
    saldoDisponible: "533333",
    saldoTotal: "1171000",
    mision: {
      title: "Mision del día",
      description: "Ahorra $5000",
    },
    ahorro: {
      url: "assets/img/home/main/infographic_up.svg",
      title: "+$23.000 ahorro",
      description: "este mes",
    },
  };

  private options = [
    {
      url: "assets/img/home/options/Cofre cerrado.svg",
      name: "Comunidades",
    },
    {
      url: "assets/img/home/options/icono_meta.svg",
      name: "Metas",
    },
    {
      url: "assets/img/home/options/Cofre cerrado.svg",
      name: "Tarjeta",
    },
    {
      url: "assets/img/home/options/icono_meta.svg",
      name: "Bazar",
    },
    {
      url: "assets/img/home/options/Cofre cerrado.svg",
      name: "Kids",
    },
  ];

  constructor(
    public modalController: ModalController,
    public animationCtrl: AnimationController
  ) {
    this.isDay = true;
    if (this.isDay) {
      this.backImage = "assets/img/home/main/fondos/Fondo_claro.png";
      this.settingsImage = "assets/img/home/header/gear_dark.svg";
      this.theme = "";
    } else {
      this.theme = "theme-dark";
      this.backImage = "assets/img/home/main/fondos/Fondo_oscuro.png";
      this.settingsImage = "assets/img/home/header/gear_light.svg";
    }
  }

  ngOnInit() {
    this.getCommunities();
    this.getGoals();
    this.getKids();
  }

  async presentModalNotifications() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector("ion-backdrop")!)
        .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

      const wrapperAnimation = this.animationCtrl
        .create()
        .addElement(baseEl.querySelector(".modal-wrapper")!)
        .beforeStyles({ transform: "translateX(100%);", opacity: 1 })
        .fromTo("transform", "translateX(100%)", "translateX(0)")
        .fromTo("opacity", 1, 1);

      return this.animationCtrl
        .create()
        .addElement(baseEl)
        .easing("ease-out")
        .duration(300)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction("reverse");
    };

    const modal = await this.modalController.create({
      component: ModalNotificationsComponent,
      cssClass: "modal-notifications",
      showBackdrop: true,
      backdropDismiss: false,
      animated: true,
      enterAnimation,
      leaveAnimation,
    });
    return await modal.present();
  }

  setBackground() {
    if (this.isDay) {
      this.backImage = "assets/img/home/main/fondos/Fondo_oscuro.png";
      this.settingsImage = "assets/img/home/header/gear_light.svg";
      this.theme = "theme-dark";
    } else {
      this.backImage = "assets/img/home/main/fondos/Fondo_claro.png";
      this.settingsImage = "assets/img/home/header/gear_dark.svg";
      this.theme = "";
    }
    this.isDay = !this.isDay;
  }

  goBazar(bazar) {
    console.log(`Se redirige al Bazar ${bazar}`);
  }

  showCommunities() {
    console.log("Se muestran las comunidades...");
  }

  showGoals() {
    console.log("Se muestran las metas...");
  }

  showKids() {
    console.log("Se muestran kids...");
  }

  goGoal(goal) {
    console.log("Se muestra la meta --> ", goal);
  }

  goCommunity(community) {
    console.log("Se muestra la comunidad --> ", community);
  }

  goKid(kid) {
    console.log("Se muestra kid --> ", kid);
  }

  getGoals() {
    this.goals = [
      {
        category_description: "Viajes y turismo",
        category_hash:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.svg",
        category_id: 22,
        current_balanse: 0,
        daily_fill: 495.0495049504951,
        goal_created_date: "2020-08-14T19:42:36.833438",
        goal_description: "Vamos pa' la playa a curar el alma...",
        goal_id: "cea2cf04-e0a0-4301-8aa1-65821821b7b0",
        goal_imagen_cut:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.png",
        goal_limit_date: "2020-12-30T00:00:00",
        goal_missing_days: 101,
        goal_status_id: 1,
        goal_subcategory: "Cruceros ",
        goal_subcategory_id: 210,
        goal_type: "TIENE META NUEVA",
        goal_value: 1050000,
        saved_money: 750000,
        status: 200,
        time_elapsed: 37,
      },
      {
        category_description: "Viajes y turismo",
        category_hash:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.svg",
        category_id: 22,
        current_balanse: 0,
        daily_fill: 495.0495049504951,
        goal_created_date: "2020-08-14T19:42:36.833438",
        goal_description: "Vamos pa' la playa a curar el alma...",
        goal_id: "cea2cf04-e0a0-4301-8aa1-65821821b7b0",
        goal_imagen_cut:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.png",
        goal_limit_date: "2020-12-30T00:00:00",
        goal_missing_days: 101,
        goal_status_id: 1,
        goal_subcategory: "Cruceros ",
        goal_subcategory_id: 210,
        goal_type: "TIENE META NUEVA",
        goal_value: 1000000,
        saved_money: 500000,
        status: 200,
        time_elapsed: 37,
      },
      {
        category_description: "Viajes y turismo",
        category_hash:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.svg",
        category_id: 22,
        current_balanse: 0,
        daily_fill: 495.0495049504951,
        goal_created_date: "2020-08-14T19:42:36.833438",
        goal_description: "Vamos pa' la playa a curar el alma...",
        goal_id: "cea2cf04-e0a0-4301-8aa1-65821821b7b0",
        goal_imagen_cut:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.png",
        goal_limit_date: "2020-12-30T00:00:00",
        goal_missing_days: 101,
        goal_status_id: 1,
        goal_subcategory: "Cruceros ",
        goal_subcategory_id: 210,
        goal_type: "TIENE META NUEVA",
        goal_value: 1050000,
        saved_money: 750000,
        status: 200,
        time_elapsed: 37,
      },
      {
        category_description: "Viajes y turismo",
        category_hash:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.svg",
        category_id: 22,
        current_balanse: 0,
        daily_fill: 495.0495049504951,
        goal_created_date: "2020-08-14T19:42:36.833438",
        goal_description: "Vamos pa' la playa a curar el alma...",
        goal_id: "cea2cf04-e0a0-4301-8aa1-65821821b7b0",
        goal_imagen_cut:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/goal/22_Viajes_turismo.png",
        goal_limit_date: "2020-12-30T00:00:00",
        goal_missing_days: 101,
        goal_status_id: 1,
        goal_subcategory: "Cruceros ",
        goal_subcategory_id: 210,
        goal_type: "TIENE META NUEVA",
        goal_value: 1050000,
        saved_money: 750000,
        status: 200,
        time_elapsed: 37,
      },
    ];
  }

  getCommunities() {
    this.communities = [
      {
        name: "Javeriana",
        value: "100000",
        url: "assets/img/home/options/javeriana.png",
      },
      {
        name: "Comfama",
        value: "205350",
        url: "assets/img/home/options/comfama.png",
      },
      {
        name: "Javeriana",
        value: "100000",
        url: "assets/img/home/options/javeriana.png",
      },
      {
        name: "Comfama",
        value: "205350",
        url: "assets/img/home/options/comfama.png",
      },
    ];
  }

  getKids() {
    this.kids = [
      {
        authorization_id: 1,
        balance: 750000,
        balance_total: 750000,
        count_goals: 3,
        first_color: "#0f591c",
        first_pocket: true,
        general_description:
          "Con el Cofre Comfenalco Valle tienes acceso a grandes beneficios, premios, promociones y mucho más.",
        goal_balance: 0,
        id_aliado: "CORRESP AV DORADO",
        internal_description: "Acceda a grandes beneficios",
        logo:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/2ba6f0886a072d8a21f0d1b9342c0be4.png",
        main_features:
          "Las principales características de este Cofre incluyen↵↵1. Poder ahorrar por separado de tu saldo Coink.↵2. Poder tener un historia…",
        market_place: true,
        name_vault: "Viaje Mateo",
        nit_vault: "900300400",
        restrictive: false,
        second_color: "#ffffff",
        type_vault: 3,
        update_term_conditions: true,
        vault_id: "03e9fcd8-63d9-49bc-aaf9-27ac4573d790",
      },
      {
        authorization_id: 1,
        balance: 0,
        balance_total: 0,
        count_goals: 0,
        first_color: "#07EE1E",
        first_pocket: false,
        general_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        goal_balance: 0,
        id_aliado: "",
        internal_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        logo:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/5bc8c567a89112d5f408a8af4f17970d.png",
        main_features:
          "Creamos este tipo de Cofre para que tú tengas total control. Acá puedes separar parte de tu saldo, ver un historial específicamente par…",
        market_place: false,
        name_vault: "Remodelación cocina",
        nit_vault: "",
        restrictive: false,
        second_color: "#05410B",
        type_vault: 4,
        update_term_conditions: true,
        vault_id: "c1cf9b95-2b06-4d0c-9a83-472cf17e1175",
      },
      {
        authorization_id: 1,
        balance: 180000,
        balance_total: 180000,
        count_goals: 0,
        first_color: "#07EE1E",
        first_pocket: false,
        general_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        goal_balance: 0,
        id_aliado: "",
        internal_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        logo:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/99e3c77bd9b8b06a5cbec5ca7ed00a7f.png",
        main_features:
          "Creamos este tipo de Cofre para que tú tengas total control. Acá puedes separar parte de tu saldo, ver un historial específicamente par…",
        market_place: false,
        name_vault: "Viernes",
        nit_vault: "",
        restrictive: false,
        second_color: "#05410B",
        type_vault: 4,
        update_term_conditions: true,
        vault_id: "e2fe5083-4f4e-44ba-9ea6-055e1b525378",
      },
      {
        authorization_id: 1,
        balance: 0,
        balance_total: 0,
        count_goals: 0,
        first_color: "#07EE1E",
        first_pocket: false,
        general_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        goal_balance: 0,
        id_aliado: "",
        internal_description:
          "Este es un Cofre personal tuyo. Tú decides cómo usarlo para organizar mejor tus ahorros.",
        logo:
          "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/faeb94e6b07d2b9e70ee62e17946a8a5.png",
        main_features:
          "Creamos este tipo de Cofre para que tú tengas total control. Acá puedes separar parte de tu saldo, ver un historial específicamente par…",
        market_place: false,
        name_vault: "Hiiy",
        nit_vault: "",
        restrictive: false,
        second_color: "#05410B",
        type_vault: 4,
        update_term_conditions: true,
        vault_id: "9f973926-f265-45dc-889b-a5eb21a71b0c",
      },
    ];
  }

  showInfoBalance(test: string) {
    alert(`Esto es un balance ${test}`);
  }

  selectOption(option, event) {
    this.optionSelected = option;
    const className = "option-selected";
    console.log(this.optionSelected);

    if (!event.currentTarget.classList.contains(className)) {
      const elems = document.querySelectorAll(`.${className}`);

      [].forEach.call(elems, (el) => {
        el.classList.remove(className);
      });
      event.currentTarget.classList.add(className);
    }
  }

  goAboutCommunities() {
    console.log("Se muestra pantalla about de Communities");
  }

  goAboutGoals() {
    console.log("Se muestra pantalla about de Metas");
  }

  goAboutKids() {
    console.log("Se muestra pantalla about de Kids");
  }
}
