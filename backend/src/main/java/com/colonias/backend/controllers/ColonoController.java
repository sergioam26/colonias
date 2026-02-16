package com.colonias.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.colonias.backend.model.Colono;
import com.colonias.backend.services.ColonoService;

@RestController
@RequestMapping("/api/colonos")
@CrossOrigin(origins = "http://localhost:4200")
public class ColonoController {

    @Autowired
    private ColonoService service;

    @GetMapping
    public List<Colono> listar() {
        return service.listar();
    }
    
    @GetMapping("/{id}")
    public Colono obtenerColono(@PathVariable Integer id) {
    	return service.obtener(id);
    }

    @PostMapping
    public Colono crear(@RequestBody Colono colono) {
        return service.crear(colono);
    }

    @PutMapping("/{id}")
    public Colono actualizar(@PathVariable Integer id,
                             @RequestBody Colono colono) {
        return service.actualizar(id, colono);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        service.eliminar(id);
    }
}
