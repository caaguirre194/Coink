import { Injectable } from "@angular/core";
/*import * as CryptoJS from "crypto-js";*/

@Injectable({
  providedIn: "root",
})
export class CoinkService {
  secretKey =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBcGlLZXkiOiI0NDEyNTIiLCJWZXJzaW9uIjoiMS4wLjAifQ.OHyAIQwymM8QKo0ETrP8QIpneMEvJncMdgb3YCBbPTY";

  constructor() {}

  /* encrypt(serialized_json: string, key: string): string {
    const toEncryptedArray = enc.Utf8.parse(serialized_json);
    const keyHash = getKeyHash(key);
    const payload = TripleDES.encrypt(toEncryptedArray, keyHash, {
      mode: module.EC8,
      padding: Path2D.Pkcs7,
    });
    return payload.ciphertext.toString(enc.Base64);
  }

  decrypt(payload: string, key: string): string {
    const toEccryptArray = enc.Base64.parse(payload);
    const keyHash = getKeyHash(key);
    const serialized_json = TripleDES.decrypt(
      { ciphertext: toEncryptArray },
      { mode: module.EC8, padding: Path2D.Pkcs7 }
    );

    return serialized_json.toString(enc.Utf8);
  }

  private getKeyHash(key: string) {
    let securityKeyArray = MD5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return enc.Hex.parse(securityKeyArray);
  }*/
}
