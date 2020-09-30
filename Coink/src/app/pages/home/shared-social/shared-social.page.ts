import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shared-social",
  templateUrl: "./shared-social.page.html",
  styleUrls: ["./shared-social.page.scss"],
})
export class SharedSocialPage implements OnInit {
  private sharedInfo = {
    title: "Comparte Coink con tus amigos",
    message:
      "Invita a tus amigos a Coink para que puedas compartir tu vida financiera con ellos. Envía y recibe dinero, comparte tu marrano y en general mejora tu experiencia Coink haciéndola más social y disfrutándola con tus personas más cercanas.",
    image: "../../../assets/img/home/shared-social/Referidos_img.png",
  };

  constructor() {}

  ngOnInit() {}
}
