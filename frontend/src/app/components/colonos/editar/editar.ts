import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ColonoService } from '../../../services/colono';

@Component({
  selector: 'app-editar',
  imports: [],
  templateUrl: './editar.html',
  styleUrl: './editar.css',
})
export class Editar {
  registro = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl(0, [Validators.required, Validators.min(6), Validators.max(120)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    observaciones: new FormControl(''),
  });

  constructor(private colonoService: ColonoService) {}
  onSubmit() {
    if (this.registro.valid) {
      // Llamamos al servicio para crear un nuevo colono

      this.colonoService
        .create({
          nombre: this.registro.value.nombre!,
          apellidos: this.registro.value.apellidos!,
          edad: this.registro.value.edad!,
          telefono: this.registro.value.telefono!,
          observaciones: this.registro.value.observaciones || '',
        })
        .subscribe({
          next: (res) => {
            console.log('Colono creado', res);
            alert('Colono creado con éxito✅');
            this.registro.reset();
          },
          error: (err) => {
            console.error('Error al crear colono', err);
            alert('Error al crear colono❌');
          },
        });
    } else {
      console.log('Formulario inválido');
      this.registro.markAllAsTouched();
    }
  }
}
