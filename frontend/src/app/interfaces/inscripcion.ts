export interface Inscripcion {
  idInscripcion?: number; //Opcional ya que se crean sin id, pero se recuperan de la base de datos con id
  idColono: number;
  turno: string;
  precio: number;
  fechaInscripcion: string;
}
