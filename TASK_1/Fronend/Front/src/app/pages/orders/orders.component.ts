import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public createOrderForm :FormGroup
  public allitems:any = []
  constructor(
    private modelService: NgbModal
  ) {
    this.createOrderForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required])
    })

  }

  ngOnInit(): void {


  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onSubmit(modal:any) {

    modal.close('Close click')

  }
  
}
