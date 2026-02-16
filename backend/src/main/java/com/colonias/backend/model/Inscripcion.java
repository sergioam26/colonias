package com.colonias.backend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "inscripcion", uniqueConstraints = @UniqueConstraint(columnNames = "id_colono"))
public class Inscripcion {


	public void setIdInscripcion(Integer idInscripcion) {
		this.idInscripcion = idInscripcion;
	}


	public void setColono(Colono colono) {
		this.colono = colono;
	}


	public void setPrecio(int precio) {
		this.precio = precio;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_inscripcion")
	private Integer idInscripcion;

	
	@OneToOne
	@JoinColumn(name = "id_colono", nullable = false, unique = true)
	private Colono colono;

	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Turno turno;


	@Column(nullable = false)
	private int precio;


	@Column(name = "fecha_inscripcion", nullable = false)
	private LocalDate fechaInscripcion;


	public Inscripcion() {
	}


	public Inscripcion(Colono colono, Turno turno, LocalDate fechaInscripcion) {
		this.colono = colono;
		this.fechaInscripcion = fechaInscripcion;
		setTurno(turno); // recalcula precio + controla null
	}

	public Integer getIdInscripcion() {
		return idInscripcion;
	}


	public Colono getColono() {
		return colono;
	}

	
	public Turno getTurno() {
		return turno;
	}


	public void setTurno(Turno turno) {
		this.turno = turno;
		this.precio = (turno != null) ? turno.getPrecio() : 0;
	}

	
	public int getPrecio() {
		return precio;
	}

	public LocalDate getFechaInscripcion() {
		return fechaInscripcion;
	}

	public void setFechaInscripcion(LocalDate fechaInscripcion) {
		this.fechaInscripcion = fechaInscripcion;
	}

	@Override
	public String toString() {
		String nombreCompleto = (colono != null) ? (colono.getNombre() + " " + colono.getApellidos()) : "SIN COLONO";
		return "Inscripcion [idInscripcion=" + idInscripcion + ", colono=" + nombreCompleto + ", turno=" + turno
				+ ", precio=" + precio + ", fechaInscripcion=" + fechaInscripcion + "]";
	}
	
	
	
	

}
