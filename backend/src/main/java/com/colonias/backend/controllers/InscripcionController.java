package com.colonias.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.colonias.backend.model.Inscripcion;
import com.colonias.backend.model.Turno;
import com.colonias.backend.services.InscripcionService;

@RestController
@RequestMapping("/api/inscripciones")
@CrossOrigin(origins = "http://localhost:4200")
public class InscripcionController {

    @Autowired
    private InscripcionService service;

    @GetMapping
    public List<Inscripcion> listar() {
        return service.listar();
    }

    @PostMapping("/colono/{idColono}")
    public Inscripcion crear(@PathVariable Integer idColono) {
        return service.crear(idColono);
    }

    @GetMapping("/turno/{turno}")
    public List<Inscripcion> porTurno(@PathVariable Turno turno) {
        return service.porTurno(turno);
    }
    
    @GetMapping("/{id}")
    public Inscripcion obtener (@PathVariable Integer id) {
    	return service.obtener(id);
    }
    
    
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
    	service.eliminar(id);
    }
}
