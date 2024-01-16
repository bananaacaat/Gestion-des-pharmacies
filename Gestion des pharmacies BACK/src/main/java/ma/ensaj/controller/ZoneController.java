package ma.ensaj.controller;


import java.util.HashSet;
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

import ma.ensaj.entities.Pharmacie;
import ma.ensaj.entities.Zone;
import ma.ensaj.repository.ZoneRepository;


@RestController
@RequestMapping("zones")
public class ZoneController {

	@Autowired
	private ZoneRepository repository;

	@PostMapping("/save")
	public void save(@RequestBody Zone Zone) {
		repository.save(Zone);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Zone s = repository.findById(Integer.parseInt(id));
		Set<Pharmacie> tmp = s.getPharmacies();
		for(Pharmacie p : tmp ) {
			p.setZone(null);	
		}
		
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Zone> findAll() {
		return repository.findAll();
	}
	
	@GetMapping("/pharmacies/{id}")
	public Set<Pharmacie> findByZone(@PathVariable(required = true) String id) {
		Zone s = repository.findById(Integer.parseInt(id));
		Set<Pharmacie> t = new HashSet<>();
		for(Pharmacie p : s.getPharmacies() ) {
			if(p.getEtat().equalsIgnoreCase("valide") ) {
				t.add(p);
			}
		}
		return t ;
	}
	
	@GetMapping(value = "/count")
	public long countZone() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody Zone newZone, @PathVariable String id) {
	    Zone tmp =  repository.findById(Integer.parseInt(id));
	    tmp.setNom(newZone.getNom());
	    tmp.setVille(newZone.getVille());
	    repository.save(tmp);
	    }

}
