import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class CoinkService {
  secretKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI0NDEyNTIiLCJWZXJzaW9uIjoiMS4wLjAifQ.OHyAIQwymM8QKo0ETrP8QIpneMEvJncMdgb3YCBbPTY";

  jsonTest = {
    phone: "3105668112",
  };

  constructor() {}

  encrypt(serializedJson: string, key: string): string {
    const toEncryptedArray = CryptoJS.enc.Utf8.parse(serializedJson);
    const keyHash = this.getKeyHash(key);
    const mode = CryptoJS.module.ECB;
    alert(mode);
    const payload = CryptoJS.TripleDES.encrypt(toEncryptedArray, keyHash, {
      mode: CryptoJS.module.ECB,
      padding: CryptoJS.Path2D.Pkcs7,
    });
    return payload.ciphertext.toString(CryptoJS.enc.Base64);
  }

  decrypt(payload: string, key: string): string {
    const toEccryptArray = CryptoJS.enc.Base64.parse(payload);
    const keyHash = this.getKeyHash(key);
    const serializedJson = CryptoJS.TripleDES.decrypt(
      { ciphertext: CryptoJS.toEncryptArray },
      { mode: CryptoJS.mode.ECB, padding: CryptoJS.Path2D.Pkcs7 }
    );

    return serializedJson.toString(CryptoJS.enc.Utf8);
  }

  private getKeyHash(key: string) {
    let securityKeyArray = CryptoJS.MD5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return CryptoJS.enc.Hex.parse(securityKeyArray);
  }
}
