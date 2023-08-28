import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { ItemServiceService } from 'src/app/services/item-service.service';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  public addCustomerForm: FormGroup
  public allCustomers: any = []
  public cityList: any = []
  public itemList: any = []
  public vehicleList: any = []
  public createOrderForm: FormGroup
  public currentPrice: any = 10
  public currentCustomer: any


  constructor(
    private modelService: NgbModal,
    private customerService: CustomerServiceService,
    private vehicleService: VehicleServiceService,
    private itemsService: ItemServiceService,
    private orderService: OrderServiceService
  ) {
    this.addCustomerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required])
    })
    this.createOrderForm = new FormGroup({
      itemId: new FormControl(null, [Validators.required]),
      customerId: new FormControl(null, [Validators.required]),
      vehicleId: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),

    })


  }

  ngOnInit(): void {
    this.getCustomer()
    this.getCities()
    this.getItems()


  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onSubmit(modal: any) {

    this.customerService.addcustomer(this.addCustomerForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getCustomer()

        modal.close('Close click')

      }, error: (error) => {
        console.log(error);


      }
    })

  }
  getCustomer() {
    this.customerService.getcustomer().subscribe({
      next: (data: any) => {
        this.allCustomers = data.data
        console.log(this.allCustomers);

      }, error: (error) => {
        console.log(error)

      }
    })
  }
  getCities() {
    this.vehicleService.getCities().subscribe({
      next: (data: any) => {
        this.cityList = data.data
        console.log(this.cityList)

      }
    })
  }
  openCreateOrder(customerID: any, city: any, content: any) {
    this.currentCustomer = customerID

    this.modelService.open(content)
    this.getAvailableVehicles(city)



  }
  getItems() {
    this.itemsService.getitem().subscribe({
      next: (data: any) => {
        console.log(data);
        this.itemList = data.data

      }
    })

  }
  getAvailableVehicles(city: any) {

    this.vehicleService.getVehiclesOfCity(city).subscribe({
      next: (data: any) => {
        console.log(data);
        this.vehicleList = data.data
      }, error: (error) => {
        console.log(error);

      }
    })



  }
  createOrder(modal: any) {
    console.log(this.currentCustomer.unique_id);

    let data = {
      ...this.createOrderForm.value,
      price: this.currentPrice,
      customerId: this.currentCustomer._id
    }
    console.log(data);

    this.orderService.addOrder(data).subscribe({
      next: (data: any) => {
        console.log(data);
        modal.close('Close click')


      }, error: (error) => {
        console.log(error);

      }
    })


  }
}
