import { TestBed } from '@angular/core/testing';

import {  VehicleInsuranceService  } from './add-insurance.service';

describe('AddInsuranceService', () => {
  let service:  VehicleInsuranceService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( VehicleInsuranceService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
