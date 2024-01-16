package ma.ensaj.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.ensaj.entities.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
	Optional<Image> findByName(String name);
}
