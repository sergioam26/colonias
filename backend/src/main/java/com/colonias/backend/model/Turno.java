package com.colonias.backend.model;

public enum Turno {

//Precio total + precio dividido por pagos

	CHICO(200), MEDIANO(220),

	GRANDE(250), SENIOR(160);

	private final int precio;
	

	Turno(int precio) {
		this.precio = precio;
	
	}

	public int getPrecio() {
		return precio;
	}

	public static Turno obtenerTurnoPorEdad(int edad) {
		if (edad >= 6 && edad <= 12)
			return CHICO;
		if (edad >= 13 && edad <= 17)
			return MEDIANO;
		if (edad >= 18 && edad <= 25)
			return GRANDE;
		if (edad >= 26)
			return SENIOR;
		return null; // menor de 6 años
	}
	

}
