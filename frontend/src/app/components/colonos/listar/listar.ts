import { Component, OnInit } from '@angular/core';
import { Colono } from '../../../interfaces/colono';
import { ColonoService } from '../../../services/colono';

@Component({
  selector: 'app-listarColono',
  standalone: true,
  imports: [],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class ListarColono implements OnInit {
  colonos: Colono[] = [];

  constructor(private colonoService: ColonoService) {}
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
}
