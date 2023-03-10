import { TestBed } from '@angular/core/testing';

import { AfdService } from './afd.service';

describe('AfdService', () => {
  let service: AfdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
