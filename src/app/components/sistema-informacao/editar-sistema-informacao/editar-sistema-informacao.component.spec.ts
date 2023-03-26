import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSistemaInformacaoComponent } from './editar-sistema-informacao.component';

describe('EditarSistemaInformacaoComponent', () => {
  let component: EditarSistemaInformacaoComponent;
  let fixture: ComponentFixture<EditarSistemaInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSistemaInformacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSistemaInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
