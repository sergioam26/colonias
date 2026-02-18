import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarColono } from './listar';

describe('Listar', () => {
  let component: ListarColono;
  let fixture: ComponentFixture<ListarColono>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarColono],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarColono);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
