import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient, private router: Router) {}

  addOrder(data: any) {
    return this.http.post(`${environment.URL}/create/order`, data);
  }
  deliveredOrder(data:any){
    return this.http.patch(`${environment.URL}/delivered/order`, data);
  
  }
}
