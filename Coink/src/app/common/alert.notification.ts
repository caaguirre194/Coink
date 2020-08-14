import { AlertController } from "@ionic/angular";

const alertController = new AlertController();

export const presentSimpleAlert = async (
  HEADER: string,
  MESSAGE: string,
  BTN: string
) => {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    header: HEADER,
    message: MESSAGE,
    buttons: [BTN],
  });

  return await alert.present();
};

export const presentConnectionErrorAlert = async () => {
  const alert = await alertController.create({
    cssClass: "my-custom-class",
    header: "Error de conexión",
    message: "Revisa tu conexión a internet e intenta de nuevo.",
    buttons: ["VOLVER"],
  });

  return await alert.present();
};
