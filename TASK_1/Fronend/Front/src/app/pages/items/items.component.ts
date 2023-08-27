import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemServiceService } from 'src/app/services/item-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  public addItemForm :FormGroup
  public allitems:any = []


  constructor(
    private modelService: NgbModal,
    private itemService:ItemServiceService
  ) {
    this.addItemForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required])
    })

  }

  ngOnInit(): void {
    this.getItems()



  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onAddItem(modal:any) {
    console.log("clicked");
    

    this.itemService.additem(this.addItemForm.value).subscribe({
      next:(data:any)=>{

        console.log(data);
        modal.close('Close click')
        this.getItems()
        

      },error:(error)=>{

      }
    })



  }

  getItems(){
    this.itemService.getitem().subscribe({
      next:(data:any)=>{
        this.allitems =data.data

        console.log(this.allitems);
        
      }
    })
  }

}
