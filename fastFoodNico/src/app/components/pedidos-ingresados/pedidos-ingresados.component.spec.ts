import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosIngresadosComponent } from './pedidos-ingresados.component';

describe('PedidosIngresadosComponent', () => {
  let component: PedidosIngresadosComponent;
  let fixture: ComponentFixture<PedidosIngresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosIngresadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosIngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
