import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  public addVehicleForm: FormGroup
  public allVehicle: any = []
  constructor(
    private modelService: NgbModal,
    private vehicleService: VehicleServiceService
  ) {
    this.addVehicleForm = new FormGroup({
      registrationNumber: new FormControl(null, [Validators.required]),
      vehicleType: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),


    })

  }

  ngOnInit(): void {
this.getVehicles()

  }
  openmodal(content: any) {
    this.modelService.open(content)

  }
  onSubmit(modal: any) {
    this.vehicleService.additem(this.addVehicleForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getVehicles()

        modal.close('Close click')

      }, error: (error) =>
        console.log(error)

    })


  }
  getVehicles(){
    this.vehicleService.getitem().subscribe({
      next:(data:any)=>{
        this.allVehicle  = data.data

      },error:(error)=>{
        console.log(error);
        
      }
    })
  }

}
