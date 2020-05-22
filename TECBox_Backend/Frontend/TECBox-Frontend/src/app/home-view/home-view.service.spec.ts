import { TestBed } from '@angular/core/testing';

import { HomeViewService } from './home-view.service';

describe('HomeViewService', () => {
  let service: HomeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
