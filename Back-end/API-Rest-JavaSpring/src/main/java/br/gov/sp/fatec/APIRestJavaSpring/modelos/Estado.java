package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "estados")
public class Estado extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String nome;
	
	@JsonIgnore
	@OneToMany(mappedBy="estado")
	public List<Cidade> cidades = new ArrayList<>();
	
	public Estado() {}

	public Estado(String nome) {
		super();
		this.nome = nome;
	}

	public List<Cidade> getCidades() {
		return cidades;
	}

	public void setCidades(List<Cidade> cidades) {
		this.cidades = cidades;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
