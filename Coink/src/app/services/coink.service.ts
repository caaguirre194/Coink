import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { coinkConfig } from "../../environments/environment";
import { SecurityService } from "./security.service";

@Injectable({
  providedIn: "root",
})
export class CoinkService {
  json = {
    phone_number: "573112222222",
    imei: "7AD0E1F1-521E-43E6-B267-62D10CDEEC79",
  };

  constructor(private http: HttpClient, securityService: SecurityService) {}

  verifyDirectLogin(phoneNumber: string, IMEI: string) {
    const postData = {
      phone_number: phoneNumber,
      imei: IMEI,
    };
    return new Promise((resolve, reject) => {
      this.http.post(coinkConfig.login, JSON.stringify(postData)).subscribe(
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
    return new Promise((resolve, reject) => {
      this.http.post(coinkConfig.signup, JSON.stringify(postData)).subscribe(
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
    return new Promise((resolve, reject) => {
      this.http.post(coinkConfig.signupv2, JSON.stringify(postData)).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
