
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleInsuranceService } from '../services/add-insurance.service';

@Component({
  selector: 'app-add-vehicle-insurance',
  templateUrl: './add-vehicle-insurance.component.html',
  styleUrls: ['./add-vehicle-insurance.component.css'],
  standalone: false
})
export class AddVehicleInsuranceComponent {
  insuranceForm: FormGroup;

  constructor(private fb: FormBuilder, private insuranceService: VehicleInsuranceService) {
    this.insuranceForm = this.fb.group({
      vehicleNo: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      premiumAmount: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit() {
    if (this.insuranceForm.valid) {
      this.insuranceService.addInsurance(this.insuranceForm.value).subscribe({
        next: (response: any) => {
          console.log('Success Response:', response);
          alert('Insurance details added successfully!');
          this.insuranceForm.reset();
        },
        error: (error: any) => {
          console.error('Error Response:', error);
          alert('An error occurred while adding insurance details.');
        }
      });
    }
  }
}
