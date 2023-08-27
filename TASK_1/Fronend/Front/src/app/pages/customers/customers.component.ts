import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  public addCustomerForm :FormGroup
  public allCustomers:any = []
  constructor(
    private modelService: NgbModal,
    private customerService:CustomerServiceService
  ) {
    this.addCustomerForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      city : new FormControl(null,[Validators.required])
    })

  }

  ngOnInit(): void {
    this.getCustomer()


  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onSubmit(modal:any) {

    this.customerService.addcustomer(this.addCustomerForm.value).subscribe({
      next:(data:any)=>{
        console.log(data);
        
      },error:(error)=>{
        console.log(error);
        

      }
    })
    modal.close('Close click')

  }
  getCustomer(){
   this.customerService.getcustomer().subscribe({
    next:(data:any)=>{
      this.allCustomers = data.data
      console.log(this.allCustomers);
      
      this.getCustomer()
    },error:(error)=>{
      console.log(error)
      
    }
   }) 
  }

}
