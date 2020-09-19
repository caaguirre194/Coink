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

  private colorGraph: "red";

  private balances = {
    oink: "assets/img/home/oinks/Oink sombra@2x.png",
    disponible: "533.333",
    total: "1.171.000",
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

  slideOpts = {
    // slidesPerView: 10,
    // freeMode: false,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
  };

  options = [
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
      name: "Comunidades",
    },
    {
      url: "assets/img/home/options/icono_meta.svg",
      name: "Metas",
    },
    {
      url: "assets/img/home/options/Cofre cerrado.svg",
      name: "Comunidades",
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
        .duration(500)
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

  // async presentModalNotifications() {
  //   const modal = await this.modalController.create({
  //     component: ModalNotificationsComponent,
  //     cssClass: "modal-notifications",
  //   });
  //   return await modal.present();
  // }

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

  ngOnInit() {}

  onClick() {}

  infoBalance(test: string) {
    alert(`Esto es un balance ${test}`);
  }

  selectOption(name) {
    alert(name);
  }
}
