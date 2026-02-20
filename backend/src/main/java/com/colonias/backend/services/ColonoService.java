package com.colonias.backend.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import com.colonias.backend.exception.*;
import org.springframework.stereotype.Service;

import com.colonias.backend.model.Colono;
import com.colonias.backend.model.Inscripcion;
import com.colonias.backend.model.Turno;
import com.colonias.backend.repositories.ColonoRepository;
import com.colonias.backend.repositories.InscripcionRepository;

@Service
public class ColonoService {

    @Autowired
    private ColonoRepository repo;
    
    @Autowired
    private InscripcionRepository insRepo;

    public Colono crear(Colono colono) {
        return repo.save(colono);
    }

    public List<Colono> listar() {
        return repo.findAll();
    }

    public Colono obtener(Integer id) {
        return repo.findById(id)
                .orElseThrow(() -> new NotFoundException("Colono no encontrado"));
    }

    public Colono actualizar(Integer id, Colono datos) {
        Colono c = obtener(id);
        c.setNombre(datos.getNombre());
        c.setApellidos(datos.getApellidos());
        c.setEdad(datos.getEdad());
        c.setTelefono(datos.getTelefono());
        c.setObservaciones(datos.getObservaciones());
        
        if(c.isInscrito()) {
        	Inscripcion i = c.getInscripcion();
        	i.setTurno(Turno.obtenerTurnoPorEdad(datos.getEdad()));
        	i.setFechaInscripcion(LocalDate.now());
        	insRepo.save(i);
        }
        return repo.save(c);
        
        
    }

    public void eliminar(Integer id) {
        repo.deleteById(id);
    }
}
