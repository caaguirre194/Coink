import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  constructor(private http: HttpClient) {
    const json = {
      phone_number: "573112222222",
      imei: "7AD0E1F1-521E-43E6-B267-62D10CDEEC79",
    };
  }

  encrypt(serializedJson: string, key: string): string {
    const toEncryptedArray = CryptoJS.enc.Utf8.parse(serializedJson);
    const keyHash = this.getKeyHash(key);
    const payload = CryptoJS.TripleDES.encrypt(toEncryptedArray, keyHash, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return payload.ciphertext.toString(CryptoJS.enc.Base64);
  }

  decrypt(payload: string, key: string): string {
    const toEncryptArray = CryptoJS.enc.Base64.parse(payload);
    const keyHash = this.getKeyHash(key);
    const serializedJson = CryptoJS.TripleDES.decrypt(
      { ciphertext: toEncryptArray },
      { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );

    return serializedJson.toString(CryptoJS.enc.Utf8);
  }

  private getKeyHash(key: string) {
    let securityKeyArray = CryptoJS.MD5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return CryptoJS.enc.Hex.parse(securityKeyArray);
  }
}
