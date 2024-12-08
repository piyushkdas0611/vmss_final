import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleInsuranceComponent } from './add-vehicle-insurance.component';

describe('AddVehicleInsuranceComponent', () => {
  let component: AddVehicleInsuranceComponent;
  let fixture: ComponentFixture<AddVehicleInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVehicleInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
