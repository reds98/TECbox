import { TestBed } from '@angular/core/testing';

import { LoginViewService } from './login-view.service';

describe('LoginViewService', () => {
  let service: LoginViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
