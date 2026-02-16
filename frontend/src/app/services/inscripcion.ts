import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from '../interfaces/enums/turno.enum';
import { Inscripcion } from '../interfaces/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {
  private api = 'http://localhost:8080/api/inscripciones';
  constructor(private http: HttpClient) {}

  //listar
  getAll(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.api);
  }

  //crear
  create(idColono: number): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(`${this.api}/colono/${idColono}`, null);
  }

  //obtener por turno

  getByTurno(turno: Turno): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${this.api}/turno/${turno}`);
  }

  //obtener por id
  getById(id: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(`${this.api}/${id}`);
  }

  // borrar
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
