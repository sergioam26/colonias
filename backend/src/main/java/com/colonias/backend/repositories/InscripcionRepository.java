package com.colonias.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.colonias.backend.model.Inscripcion;
import com.colonias.backend.model.Turno;

public interface InscripcionRepository extends JpaRepository<Inscripcion, Integer> {

	List<Inscripcion> findByTurno(Turno turno);

}
