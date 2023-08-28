import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  constructor(private http: HttpClient, private router: Router) {}
  additem(data: any) {
    return this.http.post(`${environment.URL}/create/vehicle`, data);
  }
  getitem() {
    return this.http.get(`${environment.URL}/get/vehicle`);
  }
  getCities(){
    return this.http.get(`${environment.URL}/get/vehicle/cities`);


  }
  getVehiclesOfCity(city:any){
    const params = {city}

    return this.http.get(`${environment.URL}/get/cityVehicles?city=${city}`);

  }
}
