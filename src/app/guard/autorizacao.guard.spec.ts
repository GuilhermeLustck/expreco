import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autorizacaoGuard } from './autorizacao.guard';

describe('autorizacaoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autorizacaoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
