import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insertar } from './insertar';

describe('Insertar', () => {
  let component: Insertar;
  let fixture: ComponentFixture<Insertar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insertar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Insertar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
