import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colono } from '../../../interfaces/colono';
import { ColonoService } from '../../../services/colono';
import { InscripcionService } from './../../../services/inscripcion';

@Component({
  selector: 'app-listarColono',
  standalone: true,
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class ListarColono implements OnInit {
  colonos: Colono[] = [];
  page = 1;
  pageSize = 8;

  constructor(
    private inscripcionService: InscripcionService,
    private colonoService: ColonoService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.cargarColonos();
  }

  cargarColonos() {
    this.colonoService.getAll().subscribe({
      next: (res) => (this.colonos = res),
      error: (err) => console.error('Error al cargar colonos', err),
    });
  }

  borrarColono(id: number) {
    if (confirm('¿Seguro que quieres eliminar este colono de la base de datos?')) {
      this.colonoService.delete(id).subscribe({
        next: () => {
          this.colonos = this.colonos.filter((c) => c.idColono !== id);
          alert('Colono borrado con éxito✅');
        },
        error: (err) => {
          console.error('Error al borrar colono', err);
          alert('Error al borrar colono❌');
        },
      });
    }
  }
  editarColono(id: number) {
    this.router.navigate(['colonos/editar', id]);
  }

  insertarColono() {
    this.router.navigate(['/colonos/insertar']);
  }

  insertarInscripcion(id: number) {
    if (confirm('¿Seguro que quieres crear una inscripción para este colono?')) {
      this.inscripcionService.create(id).subscribe({
        next: () => {
          alert('Inscripción creada con éxito✅');
          this.cargarColonos();
        },
        error: (err) => {
          console.error('Error al insertar inscripción', err);
          alert('Error al crear inscripción❌');
        },
      });
    }
  }

  get colonosPaginados() {
    const start = (this.page - 1) * this.pageSize;
    return this.colonos.slice(start, start + this.pageSize);
  }
}
