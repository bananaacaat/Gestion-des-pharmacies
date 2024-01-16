package ma.ensaj.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.PharmacieDeGarde;




public interface PharmacieDeGardeRepository extends JpaRepository<PharmacieDeGarde, Integer> {
	
	PharmacieDeGarde findById(int id);
	
}
