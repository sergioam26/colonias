import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColonoService } from '../../../services/colono';

@Component({
  selector: 'app-insertarColono',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insertar.html',
  styleUrl: './insertar.css',
})
export class InsertarColono implements OnInit {
  //Variables
  modoEdicion = false;
  idColono!: number;

  registro = new FormGroup({
    nombre: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    apellidos: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    edad: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(6), Validators.max(120)],
    }),
    telefono: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^\d{9}$/)],
    }),
    observaciones: new FormControl<string | null>(null),
  });

  constructor(
    private colonoService: ColonoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.idColono = +id;

      this.colonoService.getById(this.idColono).subscribe({
        next: (colono) => {
          this.registro.patchValue({
            nombre: colono.nombre || '',
            apellidos: colono.apellidos || '',
            edad: colono.edad ?? 0,
            telefono: colono.telefono || '',
            observaciones: colono.observaciones ?? null,
          });

          // Deshabilitamos nombre y apellidos

          this.registro.get('nombre')?.disable();
          this.registro.get('apellidos')?.disable();
        },
        error: (err) => console.error('Error al cargar colono', err),
      });
    }
  }

  onSubmit() {
    if (this.registro.valid) {
      if (this.modoEdicion) {
        this.colonoService.update(this.idColono, this.registro.getRawValue()).subscribe({
          next: () => {
            alert('Colono actualizado con éxito ✅');
            this.router.navigate(['/colonos']);
          },
          error: (err) => {
            console.error(err);
            alert('Error al actualizar ❌');
          },
        });
      } else {
        this.colonoService.create(this.registro.getRawValue()).subscribe({
          next: () => {
            alert('Colono creado con éxito ✅');
            this.registro.reset();
            this.router.navigate(['/colonos']);
          },
          error: (err) => {
            console.error(err);
            alert('Error al crear ❌');
          },
        });
      }
    } else {
      this.registro.markAllAsTouched();
    }
  }

  volver() {
    this.router.navigate(['/colonos']);
  }
}
