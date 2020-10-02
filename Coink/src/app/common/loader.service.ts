import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private element: HTMLElement;

  constructor(public loadingController: LoadingController) {}

  // Show the loader for infinite time
  showLoader() {
    this.loadingController
      .create({
        spinner: null,
        mode: "ios",
        cssClass: "coink",
        message: "",
      })
      .then((res) => {
        res.present();
        this.element = document.getElementsByClassName(
          "loading-wrapper"
        )[0] as HTMLElement;
        this.element.innerHTML =
          "<svg viewBox='0 0 100 100' class='ring-spinner' >" +
          "<circle class='ring' r='40' cy='50' cx='50' ></circle>" +
          "<circle class='base' r='40' cy='50' cx='50' ></circle>" +
          "</svg>";
      });
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController
      .dismiss()
      .then((res) => {
        console.log("Loading dismissed!", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}
