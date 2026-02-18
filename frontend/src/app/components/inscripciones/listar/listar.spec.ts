import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInscripcion } from './listar';

describe('Listar', () => {
  let component: ListarInscripcion;
  let fixture: ComponentFixture<ListarInscripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarInscripcion],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarInscripcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
