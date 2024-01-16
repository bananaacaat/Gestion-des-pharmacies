package ma.ensaj.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.Zone;




public interface ZoneRepository extends JpaRepository<Zone, Integer> {
	
	Zone findById(int id);

}
