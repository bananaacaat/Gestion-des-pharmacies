package ma.ensaj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.Ville;




public interface VilleRepository extends JpaRepository<Ville, Integer> {
	
	Ville findById(int id);

}
