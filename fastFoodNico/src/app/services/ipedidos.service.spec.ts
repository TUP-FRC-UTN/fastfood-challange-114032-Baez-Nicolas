import { TestBed } from '@angular/core/testing';

import { IPedidosService } from './ipedidos.service';

describe('IPedidosService', () => {
  let service: IPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
