import { Colono } from './colono';

export interface Inscripcion {
  idInscripcion?: number; //Opcional ya que se crean sin id, pero se recuperan de la base de datos con id
  colono: Colono;
  turno: string;
  precio: number;
  fechaInscripcion: string;
}
