import { TestBed } from '@angular/core/testing';

import { TuringService } from './turing.service';

describe('TuringService', () => {
  let service: TuringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
