import { TestBed } from '@angular/core/testing';

import { ApiCepService } from './api-cep.service';

describe('ApiCepService', () => {
  let service: ApiCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
