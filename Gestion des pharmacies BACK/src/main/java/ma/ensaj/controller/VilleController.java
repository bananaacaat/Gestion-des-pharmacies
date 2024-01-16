package ma.ensaj.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.ensaj.entities.Ville;
import ma.ensaj.entities.Zone;
import ma.ensaj.repository.VilleRepository;

@RestController
@RequestMapping("villes")
public class VilleController {

	@Autowired
	private VilleRepository repository;

	@PostMapping("/save")
	public void save(@RequestBody Ville Ville) {
		repository.save(Ville);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Ville s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Ville> findAll() {
		return repository.findAll();
	}

	@GetMapping("/zones/{id}")
	public Set<Zone> findByZone(@PathVariable(required = true) String id) {
		Ville s = repository.findById(Integer.parseInt(id));
		return s.getZones();
	}

	@GetMapping(value = "/count")
	public long countVille() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody Ville newVille, @PathVariable String id) {
	    Ville tmp =  repository.findById(Integer.parseInt(id));
	    tmp.setNom(newVille.getNom());
	    repository.save(tmp);
	    }

}
