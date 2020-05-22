import { TestBed } from '@angular/core/testing';

import { ClientViewService } from './client-view.service';

describe('ClientViewService', () => {
  let service: ClientViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
