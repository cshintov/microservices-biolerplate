import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  insurance: any = {
    address: "XXX",
    city: "XXX",
    country: "XXX",
    dateFrom: "DD/MM/YYYY",
    pid: 0,
    plan: "XXXX",
    policyNo: 0,
    provider: "XXXXXX",
    zip: 0,
  };

  basic: any = {
    address: "XXXXX",
    age: "XX",
    dob: "DD/MM/YYY",
    facility: "XXXX",
    gender: "XXXX",
    lang: "XXXX",
    name: "XXXX",
    patient_type: "XXXX",
    phone: "0000000000",
    pid: "0000",
    ssn: "000000",
  };

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getScreenDetails();
  }

  getScreenDetails() {

    this.http.get(`${environment.bffURL}patient/v1/demo`).subscribe((res: any) => {
      const insData = res.payload.ins;
      const basicData = res.payload.basic;

      Object.keys(basicData).map((key, i) => {
          if (this.basic.hasOwnProperty(key)) {
            this.basic[key] = basicData[key];
          }
      });

      Object.keys(insData).map((key, i) => {
        if (this.insurance.hasOwnProperty(key)) {
          this.insurance[key] = insData[key];
        }
      });

    });
  }
}
