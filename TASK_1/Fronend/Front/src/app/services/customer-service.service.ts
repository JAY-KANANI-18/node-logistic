import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient, private router: Router) {}

  addcustomer(data: any) {
    return this.http.post(`${environment.URL}/create/customer`, data);
  }
  getcustomer() {
    return this.http.get(`${environment.URL}/get/customer`);
  }
}
