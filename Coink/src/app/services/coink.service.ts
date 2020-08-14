import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { coinkConfig } from "../../environments/environment";
import { SecurityService } from "./security.service";

@Injectable({
  providedIn: "root",
})
export class CoinkService {
  options = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      Origin: "*",
      "Access-Control-Allow-Methods": "GET,POST",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-PINGOTHER",
    }),
  };

  constructor(
    private http: HttpClient,
    private securityService: SecurityService
  ) {}

  verifyDirectLogin(phoneNumber: string, IMEI: string) {
    const postData = {
      phone_number: phoneNumber,
      imei: IMEI,
    };

    const finalPostData = this.encRequest(postData);

    return new Promise((resolve, reject) => {
      this.http
        .post(coinkConfig.login, JSON.stringify(finalPostData), this.options)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  signup(
    documentNumber: string,
    documentType: string,
    expeditionDate: string,
    birthDay: string
  ) {
    const postData = {
      document_number: documentNumber,
      document_type: documentType,
      expedition_date: expeditionDate,
      birth_date: birthDay,
    };

    const finalPostData = this.encRequest(postData);

    return new Promise((resolve, reject) => {
      this.http
        .post(coinkConfig.signup, JSON.stringify(finalPostData), this.options)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  signupV2(data: any) {
    const postData = {
      phone_number: data.phone_number,
      names: data.names,
      last_names: data.last_names,
      document_id: data.phone_nudocument_idmber,
      document_number: data.document_number,
      document_expiration_date: data.document_expiration_date,
      birth_date: data.birth_date,
      gender_id: data.phone_number,
      state_id: data.state_id,
      city_id: data.city_id,
      address: data.address,
      pin: data.pin,
      email: data.email,
      imei: data.imei,
      push_registration_id: data.push_registration_id,
      topic_registration_id: data.topic_registration_id,
      referrer_phonenumber: data.referrer_phonenumber,
      parent_info: data.parent_info,
      query_id: data.query_id,
    };

    const finalPostData = this.encRequest(postData);

    return new Promise((resolve, reject) => {
      this.http
        .post(coinkConfig.signupv2, JSON.stringify(finalPostData), this.options)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  encRequest(request: any) {
    const EncPayload = this.securityService.encrypt(
      JSON.stringify(request),
      this.securityService.secretKey
    );

    return {
      payload: EncPayload,
    };
  }
}
