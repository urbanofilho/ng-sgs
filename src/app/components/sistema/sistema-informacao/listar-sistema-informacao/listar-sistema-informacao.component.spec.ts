import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSistemaInformacaoComponent } from './listar-sistema-informacao.component';

describe('ListarSistemaInformacaoComponent', () => {
  let component: ListarSistemaInformacaoComponent;
  let fixture: ComponentFixture<ListarSistemaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSistemaInformacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSistemaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
