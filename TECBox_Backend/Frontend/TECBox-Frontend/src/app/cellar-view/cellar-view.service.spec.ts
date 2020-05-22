import { TestBed } from '@angular/core/testing';

import { CellarViewService } from './cellar-view.service';

describe('CellarViewService', () => {
  let service: CellarViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellarViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
