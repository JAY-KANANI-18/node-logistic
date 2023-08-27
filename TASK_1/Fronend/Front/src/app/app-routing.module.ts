import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as path from 'path';
import { ItemsComponent } from './pages/items/items.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {path:"",
  component:ItemsComponent

} , {path:"item",
component:ItemsComponent

},{
  path:"customer",
  component:CustomersComponent
},{
  path:"vehicle",
  component:VehiclesComponent
},{
  path:"order",
  component:OrdersComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
