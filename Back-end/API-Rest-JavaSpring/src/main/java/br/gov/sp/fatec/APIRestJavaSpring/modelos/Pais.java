package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "paises")
public class Pais extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String nome;
	
	@JsonIgnore
	@OneToMany(mappedBy="pais")
	private List<Estado> estados = new ArrayList<>();
	
	public Pais() {}

	public Pais(String nome) {
		super();
		this.nome = nome;
	}

	public List<Estado> getEstados() {
		return estados;
	}

	public void setEstados(List<Estado> estados) {
		this.estados = estados;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
