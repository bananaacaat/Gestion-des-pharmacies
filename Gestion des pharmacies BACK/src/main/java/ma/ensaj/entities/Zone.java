package ma.ensaj.entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Zone {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String nom;
	
	
	@ManyToOne
	private Ville ville;
	@JsonIgnore
	@OneToMany(mappedBy = "zone",fetch = FetchType.EAGER)
	private Set<Pharmacie> pharmacies;
	
	

	public Zone(String nom, Ville ville) {
		this.nom = nom;
		this.ville = ville;
	}

	public Zone(int id, String nom, Ville ville) {
		this.id = id;
		this.nom = nom;
		this.ville = ville;
	}

	public Ville getVille() {
		return ville;
	}

	public void setVille(Ville ville) {
		this.ville = ville;
	}


	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Set<Pharmacie> getPharmacies() {
		return pharmacies;
	}

	public void setPharmacies(Set<Pharmacie> pharmacies) {
		this.pharmacies = pharmacies;
	}

	public Zone() {
		super();
	}
	
	

}
