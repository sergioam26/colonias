package com.colonias.backend.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.colonias.backend.model.Colono;
import com.colonias.backend.model.Inscripcion;
import com.colonias.backend.model.Turno;
import com.colonias.backend.repositories.ColonoRepository;
import com.colonias.backend.repositories.InscripcionRepository;
import com.colonias.backend.exception.*;

@Service
public class InscripcionService {

    @Autowired
    private ColonoRepository colonoRepo;

    @Autowired
    private InscripcionRepository inscripcionRepo;

    public Inscripcion crear(Integer idColono) {

        Colono colono = colonoRepo.findById(idColono)
                .orElseThrow(() -> new NotFoundException("Colono no existe"));

        if (colono.getEdad() < 6)
            throw new IllegalArgumentException("Edad no válida");

        Turno turno = Turno.obtenerTurnoPorEdad(colono.getEdad());

        Inscripcion i = new Inscripcion();
        i.setColono(colono);
        i.setTurno(turno);
        i.setFechaInscripcion(LocalDate.now());

        colono.setInscrito(true);
        colonoRepo.save(colono);

        return inscripcionRepo.save(i);
    }

    public List<Inscripcion> listar() {
        return inscripcionRepo.findAll();
    }

    public List<Inscripcion> porTurno(Turno turno) {
        return inscripcionRepo.findByTurno(turno);
    }

    public void eliminar(Integer id) {
    	
    	Inscripcion inscripcion = inscripcionRepo.findById(id).orElseThrow(() -> new NotFoundException("Inscripción no existe"));
    	//Rompemos la relación inversa
    	Colono colono = inscripcion.getColono();
    	if(colono != null) {
    		colono.setInscripcion(null);
    	}
    	
    	//Rompemos la relación directa
    	
    	inscripcion.setColono(null);
    	
    	//Borramos inscripción
    	
    	inscripcionRepo.deleteById(id);
        colono.setInscrito(false);
        colonoRepo.save(colono);
    
    }
    
    public Inscripcion obtener(Integer id) {
         return inscripcionRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Inscripción no existe"));

    }
}
