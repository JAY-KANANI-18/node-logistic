import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './pages/items/items.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './services/interceptor/auth-interceptor.interceptor';
import { EllipsisPipe } from './services/pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CustomersComponent,
    VehiclesComponent,
    OrdersComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
     NgbModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,        useClass:AuthInterceptorInterceptor,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
