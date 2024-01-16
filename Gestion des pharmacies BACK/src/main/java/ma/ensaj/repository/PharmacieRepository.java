package ma.ensaj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.Pharmacie;



public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	
	Pharmacie findById(int id);


	
}
