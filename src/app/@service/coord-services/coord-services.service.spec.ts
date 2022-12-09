import { TestBed } from '@angular/core/testing';

import { CoordServicesService } from './coord-services.service';

describe('CoordServicesService', () => {
  let service: CoordServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
