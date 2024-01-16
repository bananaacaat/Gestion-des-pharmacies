package ma.ensaj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.*;


public interface GardeRepository extends JpaRepository<Garde, Integer> {
	
	Garde findById(int id);

}
