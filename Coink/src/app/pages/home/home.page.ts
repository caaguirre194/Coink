import { Component, OnInit } from "@angular/core";

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

  private balances = {
    disponible: "533.333",
    total: "1.171.000",
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

  constructor() {
    this.isDay = true;
    this.theme = "theme-light";
    this.backImage = "assets/img/home/main/fondos/Fondo_claro.png";
    this.settingsImage = "assets/img/home/header/gear_dark.svg";
  }

  setBackground() {
    if (this.isDay) {
      this.backImage = "assets/img/home/main/fondos/Fondo_oscuro.png";
      this.settingsImage = "assets/img/home/header/gear_light.svg";
      this.theme = "theme-dark";
    } else {
      this.backImage = "assets/img/home/main/fondos/Fondo_claro.png";
      this.settingsImage = "assets/img/home/header/gear_dark.svg";
      this.theme = "theme-light";
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
