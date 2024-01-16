package ma.ensaj.controller;

import java.util.Date;
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
import ma.ensaj.entities.PharmacieDeGarde;
import ma.ensaj.repository.PharmacieDeGardeRepository;
import ma.ensaj.repository.PharmacieRepository;



@RestController
@RequestMapping("pharmacieDeGardes")
public class PharmacieDeGardeController {

	@Autowired
	private PharmacieDeGardeRepository repository;
	@Autowired

	private PharmacieRepository repository1;


	@PostMapping("/save")
	public void save(@RequestBody PharmacieDeGarde PharmacieDeGarde) {
		repository.save(PharmacieDeGarde);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		PharmacieDeGarde s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<PharmacieDeGarde> findAll() {
		return repository.findAll();
	}
	@GetMapping("/getActual")
	public Set<PharmacieDeGarde> getActual() {
		List<PharmacieDeGarde> tmp = repository.findAll();
		Set<PharmacieDeGarde> actual = new HashSet<>();
		Date date = new Date();
		for(PharmacieDeGarde p : tmp ) {
			if(p.getPharmacieDeGardePK().getDateDebut().after(date)==false && p.getDateFin().before(date)==false &&  p.getPharmacie().getEtat().equalsIgnoreCase("valide") ) {
				actual.add(p);
			}
		}
		return actual;
	}
	@GetMapping("/getActual/jour/{id}")
	public Set<PharmacieDeGarde> getActualJour(@PathVariable(required = true) String id) {
		List<PharmacieDeGarde> tmp = repository.findAll();
		Set<PharmacieDeGarde> actual = new HashSet<>();
		Date date = new Date();
		for(PharmacieDeGarde p : tmp ) {
			if(p.getPharmacieDeGardePK().getDateDebut().after(date)==false && p.getDateFin().before(date)==false &&  p.getPharmacie().getZone().getId()==Integer.parseInt(id) &&  p.getGarde().getType().equalsIgnoreCase("jour") && p.getPharmacie().getEtat().equalsIgnoreCase("valide") ) {
				actual.add(p);
			}
		}
		return actual;
	}
	@GetMapping("/getActual/nuit/{id}")
	public Set<PharmacieDeGarde> getActualNuit(@PathVariable(required = true) String id) {
		List<PharmacieDeGarde> tmp = repository.findAll();
		Set<PharmacieDeGarde> actual = new HashSet<>();
		Date date = new Date();
		for(PharmacieDeGarde p : tmp ) {
			if(p.getPharmacieDeGardePK().getDateDebut().after(date)==false && p.getDateFin().before(date)==false &&  p.getGarde().getType().equalsIgnoreCase("nuit") && p.getPharmacie().getZone().getId()==Integer.parseInt(id) && p.getPharmacie().getEtat().equalsIgnoreCase("valide") ) {
				actual.add(p);
			}
		}
		return actual;
	}
	

	@GetMapping(value = "/count")
	public long countPharmacieDeGarde() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody PharmacieDeGarde newPK, @PathVariable String id) {
		PharmacieDeGarde tmp =  repository.findById(Integer.parseInt(id));
	    tmp.setPharmacie(newPK.getPharmacie());
	    tmp.setGarde(newPK.getGarde());
	    tmp.setPharmacieDeGardePK(newPK.getPharmacieDeGardePK());
	    tmp.setDateFin(newPK.getDateFin());
	    repository.save(tmp);
	    }
		
		@GetMapping("/garde/{id}")
		public PharmacieDeGarde getPharmaciePKbyID(@PathVariable String id) {
		List<PharmacieDeGarde> pks = repository.findAll();
		PharmacieDeGarde result = new PharmacieDeGarde();
		Pharmacie ph = repository1.findById(Integer.parseInt(id));
		Date date = new Date();
		for(PharmacieDeGarde pk : pks) {
			if(pk.getPharmacie()==ph) {
				if(pk.getPharmacieDeGardePK().getDateDebut().before(date)==true && pk.getDateFin().after(date)==true){
						result = pk;
				}
				
				if(pk.getDateFin().after(date)==true && pk.getPharmacieDeGardePK().getDateDebut().before(date)==false ){
						result = pk;
				}
				
				
				}

		}
		
		return result;
    
	}
 /* 
	@GetMapping("/garde/actual/{id}")
	public Set<PharmacieDeGarde> getPharmaciePKbyActual(@PathVariable String id) {
		List<PharmacieDeGarde> pks = repository.findAll();
		Set<PharmacieDeGarde> result = new HashSet<PharmacieDeGarde>();
		Pharmacie ph = repository1.findById(Integer.parseInt(id));
		Date date = new Date();
		for(PharmacieDeGarde p : pks) {
			if(p.getPharmacie()==ph && p.getPharmacieDeGardePK().getDateDebut().after(date)==false && p.getDateFin().before(date)==false) {
				result.add(p);
				}
		}
		return result;
		
    
	}*/

	@GetMapping("/garde/actual/{id}")
	public Set<PharmacieDeGarde> getPharmaciePKbyActual(@PathVariable String id) {
		List<PharmacieDeGarde> pks = repository.findAll();
		Set<PharmacieDeGarde> result = new HashSet<PharmacieDeGarde>();
		Pharmacie ph = repository1.findById(Integer.parseInt(id));
		for(PharmacieDeGarde p : pks) {
			if(p.getPharmacie()==ph ) {
				result.add(p);
				}
		}
		return result;
		
    
	}
		
		

}
