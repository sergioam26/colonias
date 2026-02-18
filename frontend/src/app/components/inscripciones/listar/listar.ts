import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colono } from '../../../interfaces/colono';
import { ColonoService } from '../../../services/colono';
import { Inscripcion } from '../../../interfaces/inscripcion';
import { InscripcionService } from '../../../services/inscripcion';

@Component({
  selector: 'app-listarColono',
  standalone: true,
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class ListarInscripcion implements OnInit {
  inscripciones: Inscripcion[] = [];

  constructor(
    private inscripcionService: InscripcionService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.cargarInscripciones();
  }

  cargarInscripciones() {
    this.inscripcionService.getAll().subscribe({
      next: (res) => (this.inscripciones = res),
      error: (err) => console.error('Error al cargar inscripciones', err),
    });
  }

  borrarInscripcion(id: number) {
    if (confirm('¿Seguro que quieres eliminar esta inscripción de la base de datos?')) {
      this.inscripcionService.delete(id).subscribe({
        next: () => {
          this.inscripciones = this.inscripciones.filter((c) => c.idInscripcion !== id);
          alert('Inscripción eliminada con éxito✅');
        },
        error: (err) => {
          console.error('Error al borrar inscripción', err);
          alert('Error al borrar inscripción❌');
        },
      });
    }
  }
}
