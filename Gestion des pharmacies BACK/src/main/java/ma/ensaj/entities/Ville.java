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
public class Ville {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String nom;
	
	@JsonIgnore
	@OneToMany(mappedBy = "ville", fetch = FetchType.EAGER)
	private Set<Zone> zones;

	public String getNom() {
		return nom;
	}

	public Ville(String nom) {
		this.nom = nom;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}




	public Set<Zone> getZones() {
		return zones;
	}

	public void setZones(Set<Zone> zones) {
		this.zones = zones;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Ville() {

	}

}
