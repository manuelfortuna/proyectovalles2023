import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPedidoTableComponent } from './crear-pedido-table.component';

describe('CrearPedidoTableComponent', () => {
  let component: CrearPedidoTableComponent;
  let fixture: ComponentFixture<CrearPedidoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPedidoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPedidoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
