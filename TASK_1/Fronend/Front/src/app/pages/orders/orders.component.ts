import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public addItemForm :FormGroup
  public allitems = [1,2,3]
  constructor(
    private modelService: NgbModal
  ) {
    this.addItemForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required])
    })

  }

  ngOnInit(): void {


  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onAddItem(modal:any) {

    modal.close('Close click')

  }
}
