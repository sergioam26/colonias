import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colono } from '../interfaces/colono';

@Injectable({ providedIn: 'root' })
export class ColonoService {
  private api = 'http://localhost:8080/api/colonos';

  constructor(private http: HttpClient) {}

  // listar
  getAll(): Observable<Colono[]> {
    return this.http.get<Colono[]>(this.api);
  }

  // obtener por id
  getById(id: number): Observable<Colono> {
    return this.http.get<Colono>(`${this.api}/${id}`);
  }

  // crear
  create(colono: Colono): Observable<Colono> {
    return this.http.post<Colono>(this.api, colono);
  }
  // actualizar
  update(id: number, colono: Colono): Observable<Colono> {
    return this.http.put<Colono>(`${this.api}/${id}`, colono);
  }

  // borrar
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
