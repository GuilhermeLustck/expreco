import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pagamGuard } from './pagam.guard';

describe('pagamGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pagamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
