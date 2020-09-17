import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  private balances = {
    disponible: "533.333",
    total: "1.171.000",
  };

  private isDay: boolean;

  photo = "assets/img/home/main/fondos/Fondo oscuro.png";

  photo2 = `url( ${this.photo})`;

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
    {
      url: "assets/img/home/options/icono_meta.svg",
      name: "Metas",
    },
  ];

  constructor() {}

  setBackground() {}

  ngOnInit() {}

  onClick() {}

  infoBalance(test: string) {
    alert(`Esto es un balance ${test}`);
  }
}
