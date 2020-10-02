import { Component, OnInit } from "@angular/core";
import { ModalController, AnimationController } from "@ionic/angular";
import { NotificationsPage } from "./notifications/notifications.page";
import { LoaderService } from "../../common/loader.service";
import { Community } from "../../models/Community";
import { Goal } from "../../models/Goal";
import { Kid } from "../../models/Kid";
import { Bazar } from "../../models/Bazar";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  private isDay: boolean;

  private backgroundLight = "assets/img/home/main/fondos/Fondo_claro.png";
  private backgroundDark = "assets/img/home/main/fondos/Fondo_oscuro.png";
  private settingsImageLight = "assets/img/home/header/gear_light.svg";
  private settingsImageDark = "assets/img/home/header/gear_dark.svg";

  private slideOptionSelected: string;
  private stateCard: string;
  private visibleCard: boolean = false;

  private goals: Goal[];
  private communities: Community[];
  private bazarItems: Bazar[];
  private kids: Kid[];

  private card = {
    type: "MASTERCARD",
    number: "**** **** **** 6789",
    dueDate: "12/12",
    cvv: "***",
  };

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

  private slideOptions = [
    {
      url: "assets/img/home/slide-options/Cofre cerrado.svg",
      name: "Comunidades",
      options: {},
    },
    {
      url: "assets/img/home/slide-options/icono_meta.svg",
      name: "Metas",
      options: {},
    },
    {
      url: "assets/img/home/slide-options/Cofre cerrado.svg",
      name: "Tarjeta",
      options: {
        activate: false,
      },
    },
    {
      url: "assets/img/home/slide-options/icono_meta.svg",
      name: "Bazar",
      options: {},
    },
    {
      url: "assets/img/home/slide-options/Cofre cerrado.svg",
      name: "Kids",
      options: {},
    },
  ];

  constructor(
    public modalController: ModalController,
    public animationCtrl: AnimationController,
    public loaderService: LoaderService
  ) {
    this.isDay = true;
    this.stateCard = "Activated"; //  Disabled, Enabled, Activated
  }

  ngOnInit() {
    this.loaderService.showLoader();
    Promise.all([this.getCommunities(), this.getGoals(), this.getKids()])
      .then((e) => {
        this.getBazarItems();
        this.slideOptionSelected = this.slideOptions[0].name;
        this.loaderService.hideLoader();
      })
      .catch((error) => {
        this.loaderService.hideLoader();
        console.log("error", error);
      });
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
      component: NotificationsPage,
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

  showCardDetails() {
    console.log("Se muestran detalles de tarjeta...");
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
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, [
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
      ]);
    }).then(this.dataSet("goals"));
  }

  getCommunities() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, [
        {
          logo:
            "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/2ba6f0886a072d8a21f0d1b9342c0be4.png",
          name_vault: "DEV - Comfenalco Valle",
          id_aliado: "CORRESP AV DORADO",
          nit_vault: "900300400",
          first_color: "#0f591c",
          second_color: "#ffffff",
          type_vault: 3,
          general_description:
            "Con el Cofre Comfenalco Valle tienes acceso a grandes beneficios, premios, promociones y mucho más.",
          internal_description: "Acceda a grandes beneficios",
          authorization_id: 1,
          main_features:
            "Las principales características de este Cofre incluyen\n\n1. Poder ahorrar por separado de tu saldo Coink.\n2. Poder tener un historial específico para este Cofre.\n3. Poder meter y sacar plata directamente de tu cofre en corresponsales, comercios y Oinks que hagan parte de la alianza Coink - Comfama.",
          restrictive: false,
          balance: 50000.0,
          vault_id: "a31e81dd-0e53-4ba7-9f1a-098805129f51",
          update_term_conditions: true,
          count_goals: 3,
          goal_balance: 0.0,
          market_place: true,
          balance_total: 50000.0,
        },
        {
          logo:
            "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/675db86792c60100cd1faef2dd5295e7.png",
          name_vault: "DEV - Pontificia Universidad Javeriana",
          id_aliado: "CORRESP AV CALI",
          nit_vault: "900200300",
          first_color: "#0056a2",
          second_color: "#ffffff",
          type_vault: 3,
          general_description: "Cofre para la comunidad Javeriana",
          internal_description:
            "Ahorra en tu cofre y disfruta de beneficios exclusivos en nuestros campus y con aliados de la Universidad.",
          authorization_id: 1,
          main_features:
            "1. Ahorrar por separado de tu saldo Coink.\n2. Tener un historial solo para este cofre.\n3. Sacar y meter plata directamente de y a tu Cofre en corresponsales, comercios y Oinks que hagan parte de la alianza Coink - Javeriana.",
          restrictive: false,
          balance: 139139.0,
          vault_id: "68e105e8-5a1d-4b01-a92f-ae10caadd998",
          update_term_conditions: true,
          count_goals: 4,
          goal_balance: 11528.0,
          market_place: false,
          balance_total: 150489.0,
        },
        {
          logo:
            "https://s3.amazonaws.com/dev.cdn.bancoink.biz/pockets/faaee6d9c8fdc9d1b68f6101ca24c873.png",
          name_vault: "DEV - Cofre - Comfama",
          id_aliado: "DEV COMFAMA",
          nit_vault: "800234000",
          first_color: "#EE2B7B",
          second_color: "#ffffff",
          type_vault: 3,
          general_description:
            "Con el Cofre Comfama tienes acceso a grandes beneficios, premios, promociones y mucho más.",
          internal_description: "Cofre Comfama fase 1",
          authorization_id: 1,
          main_features:
            "Las principales características de este Cofre incluyen\n\n1. Poder ahorrar por separado de tu saldo Coink.\n2. Poder tener un historial específico para este Cofre.\n3. Poder meter y sacar plata directamente de tu cofre en corresponsales, comercios y Oinks que hagan parte de la alianza Coink - Comfama.\n",
          restrictive: false,
          balance: 23900.0,
          vault_id: "6f22403a-3520-4c6b-9027-b8fd5ac337d4",
          update_term_conditions: true,
          count_goals: 1,
          goal_balance: 2800.0,
          market_place: false,
          balance_total: 26700.0,
        },
      ]);
    }).then(this.dataSet("communities"));
  }

  getBazarItems() {
    this.bazarItems = [
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
  }

  getKids() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, [
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
      ]);
    }).then(this.dataSet("kids"));
  }

  /**
   * Set data
   * @param name data name
   */
  public dataSet(name: string): any {
    return (e) => (this[name] = e);
  }

  showInfoBalance(test: string) {
    alert(`Esto es un balance ${test}`);
  }

  selectOption(option, event) {
    this.slideOptionSelected = option;
    const className = "option-selected";
    console.log(this.slideOptionSelected);
    // switch (this.slideOptionSelected) {
    //   case "Comunidades":
    //     this.communities = undefined;
    //     this.getCommunities();
    //     break;
    //   case "Metas":
    //     this.getGoals();
    //     break;
    //   // case "Tarjeta":
    //   //   this.getCard();
    //   //   break;
    //   case "Bazar":
    //     this.getBazarItems();
    //     break;
    //   case "Kids":
    //     this.getKids();
    //     break;
    // }

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

  showDataCard() {
    this.visibleCard = !this.visibleCard;

    if (this.visibleCard) {
      this.card.number = this.cardNumberFormat("1234123412346789");
      this.card.cvv = "347";
    } else {
      this.card.number = "**** **** **** 6789";
      this.card.cvv = "***";
    }
  }

  cardNumberFormat(value) {
    console.log("Entra -->", value);
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      console.log("Sale -->", parts.join(" "));
      return parts.join(" ");
    } else {
      console.log("Sale -->", value);
      return value;
    }
  }
}
