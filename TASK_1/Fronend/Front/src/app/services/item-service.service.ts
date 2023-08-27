import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient, private router: Router) {}

  additem(data: any) {
    return this.http.post(`${environment.URL}/create/item`, data);
  }
  getitem() {
    return this.http.get(`${environment.URL}/get/item`);
  }
}
