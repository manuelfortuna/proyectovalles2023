import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePedidoComponent } from './home-pedido.component';

describe('HomePedidoComponent', () => {
  let component: HomePedidoComponent;
  let fixture: ComponentFixture<HomePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
