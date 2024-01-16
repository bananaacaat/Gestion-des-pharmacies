package ma.ensaj.entities;



import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Garde {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idGarde;
	private String type;

	@JsonIgnore
	@OneToMany(mappedBy = "garde",fetch = FetchType.EAGER)
	private Set<PharmacieDeGarde> gardes ;
	
	public Garde(int idGarde, String type) {
		this.idGarde = idGarde;
		this.type = type;
	}

	public Garde(String type) {
		this.type = type;
	}

	public Garde() {
		super();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getIdGarde() {
		return idGarde;
	}

	public void setIdGarde(int idGarde) {
		this.idGarde = idGarde;
	}

	public Set<PharmacieDeGarde> getGardes() {
		return gardes;
	}

	public void setGardes(Set<PharmacieDeGarde> gardes) {
		this.gardes = gardes;
	}
	
	
}
