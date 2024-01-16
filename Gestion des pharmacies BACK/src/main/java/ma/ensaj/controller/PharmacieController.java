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
import ma.ensaj.entities.User;
import ma.ensaj.repository.PharmacieRepository;
import ma.ensaj.repository.UserRepository;


@RestController
@RequestMapping("pharmacies")
public class PharmacieController {

	@Autowired
	private PharmacieRepository repository;
	@Autowired
	private UserRepository usrepository;

	@PostMapping("/save")
	public void save(@RequestBody Pharmacie Pharmacie) {
		repository.save(Pharmacie);
	}


	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Pharmacie s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/nv")
	public Set<Pharmacie> findAllt() {
		List<Pharmacie> tmp = repository.findAll();
		Set<Pharmacie> result = new HashSet<Pharmacie>();
		for(Pharmacie p : tmp){
			if(p.getEtat().equalsIgnoreCase("non valide") ){
				result.add(p);
			}
		}
		return result;
	}
	@GetMapping("/all")
	public Set<Pharmacie> findAll() {
		List<Pharmacie> tmp = repository.findAll();
		Set<Pharmacie> result = new HashSet<Pharmacie>();
		for(Pharmacie p : tmp){
			if(p.getEtat().equalsIgnoreCase("valide") ){
				result.add(p);
			}
		}
		return result;
	}

	@GetMapping("/{email}")
	public Pharmacie findofUser(@PathVariable(required = true) String email) {
		User tmp = usrepository.findByEmail(email);
		/*if(tmp.getPharmacie()==null){
			Pharmacie ph = new Pharmacie("Nom", "adresse" , null, null, null);
			ph.setEtat("non valide");
			ph.setUser(tmp);
			repository.save(ph);
		}*/
		Pharmacie pr = tmp.getPharmacie();
		
	return pr;
		
	}

	@GetMapping("byId/{id}")
	public Pharmacie finbyID(@PathVariable(required = true) String id) {
		Pharmacie tmp = repository.findById(Integer.parseInt(id));
		/*if(tmp.getPharmacie()==null){
			Pharmacie ph = new Pharmacie("Nom", "adresse" , null, null, null);
			ph.setEtat("non valide");
			ph.setUser(tmp);
			repository.save(ph);
		}*/
		
		
	return tmp;
		
	}

	@GetMapping(value = "/count")
	public long countPharmacie() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody Pharmacie newPharmacie, @PathVariable String id) {
		Pharmacie tmp =  repository.findById(Integer.parseInt(id));
	    if(newPharmacie.getNom()!=null) tmp.setNom(newPharmacie.getNom());
	    if(newPharmacie.getAdresse()!=null) tmp.setAdresse(newPharmacie.getAdresse());
	    if(newPharmacie.getLat()!=null) tmp.setLat(newPharmacie.getLat());
	    if(newPharmacie.getLog()!=null) tmp.setLog(newPharmacie.getLog());
	    if(newPharmacie.getZone()!=null) tmp.setZone(newPharmacie.getZone());
	    repository.save(tmp);
	    }
		@GetMapping("/validate/{id}")
	  public void validateZone(@PathVariable String id) {
		Pharmacie tmp =  repository.findById(Integer.parseInt(id));
	    tmp.setEtat("valide");
	    repository.save(tmp);
	    }
}
