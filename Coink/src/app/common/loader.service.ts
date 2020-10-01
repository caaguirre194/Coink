import { Injectable, SecurityContext } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  constructor(
    public loadingController: LoadingController,
    private sanitizer: DomSanitizer
  ) {}

  // Show the loader for infinite time
  showLoader() {
    let x = this.sanitizer.bypassSecurityTrustHtml(
      "<svg viewBox='0 0 100 100' class='ring-spinner' >" +
        "<circle class='ring' r='40' cy='50' cx='50' ></circle>" +
        "<circle class='base' r='40' cy='50' cx='50' ></circle>" +
        "</svg>"
    );

    let y = this.sanitizer.sanitize(SecurityContext.HTML, x);

    this.loadingController
      .create({
        spinner: null,
        mode: "ios",
        cssClass: "coink",
        // message: this.sanitizer.bypassSecurityTrustHtml(
        //   "<svg viewBox='0 0 100 100' class='ring-spinner' >" +
        //     "<circle class='ring' r='40' cy='50' cx='50' ></circle>" +
        //     "<circle class='base' r='40' cy='50' cx='50' ></circle>" +
        //     "</svg>"
        // ),
        message: y as string,
      })
      .then((res) => {
        res.present();
      });
  }

  transform(html: any): string {
    return this.sanitizer.bypassSecurityTrustHtml(html) as string;
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
