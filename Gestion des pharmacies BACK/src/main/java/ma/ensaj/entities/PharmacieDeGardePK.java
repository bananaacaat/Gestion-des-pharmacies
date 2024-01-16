package ma.ensaj.entities;


import java.io.Serializable;
import java.util.Date;

import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonFormat;

@Embeddable
public class PharmacieDeGardePK implements Serializable{

	private int pharmaciePK;
	private int gardePK;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date dateDebut;

	public PharmacieDeGardePK(int pharmaciePK, int gardePK, Date dateDebut) {
		super();
		this.pharmaciePK = pharmaciePK;
		this.gardePK = gardePK;
		this.setDateDebut(dateDebut);
	}

	public int getPharmaciePK() {
		return pharmaciePK;
	}

	public void setPharmaciePK(int pharmaciePK) {
		this.pharmaciePK = pharmaciePK;
	}

	public int getGardePK() {
		return gardePK;
	}

	public void setGardePK(int gardePK) {
		this.gardePK = gardePK;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public PharmacieDeGardePK() {
		super();
	}

}
