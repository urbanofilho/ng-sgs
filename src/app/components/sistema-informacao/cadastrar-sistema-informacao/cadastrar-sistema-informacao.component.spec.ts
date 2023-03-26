import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSistemaInformacaoComponent } from './cadastrar-sistema-informacao.component';

describe('CadastrarSistemaInformacaoComponent', () => {
  let component: CadastrarSistemaInformacaoComponent;
  let fixture: ComponentFixture<CadastrarSistemaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarSistemaInformacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarSistemaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
