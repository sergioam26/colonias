package com.colonias.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "colono")
public class Colono {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_colono")
	private Integer idColono;

	@Column(nullable = false, length = 50)
	private String nombre;


	@Column(nullable = false, length = 50)
	private String apellidos;


	@Column(nullable = false, length = 9)
	private String telefono;


	@Column(nullable = false)
	private int edad;


	@Column(length = 255)
	private String observaciones;
	
	@JsonBackReference
	@OneToOne(mappedBy = "colono", cascade = CascadeType.ALL, orphanRemoval = true)
	private Inscripcion inscripcion;

	
	public Colono() {
	}


	
	
	

	public void setIdColono(Integer idColono) {
		this.idColono = idColono;
	}

	public Integer getIdColono() {
		return idColono;
	}

	
	public String getNombre() {
		return nombre;
	}

	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	
	public String getApellidos() {
		return apellidos;
	}

	
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	
	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public int getEdad() {
		return edad;
	}

	
	public void setEdad(int edad) {
		this.edad = edad;
	}


	public String getObservaciones() {
		return observaciones;
	}

	
	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}
 

	public Inscripcion getInscripcion() {
		return inscripcion;
	}

	
	 
	public void setInscripcion(Inscripcion inscripcion) {
		this.inscripcion = inscripcion;
	}

	@Override
	public String toString() {
		return "Colono [idColono=" + idColono + ", nombre=" + nombre + ", apellidos=" + apellidos + ", telefono="
				+ telefono + ", edad=" + edad + ", observaciones=" + observaciones + "]";
	}
}