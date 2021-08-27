package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "cidades")
public class Cidade extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private String nome;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="estado_id")
	private Estado estado;
	
	public Cidade() {}

	public Cidade(String nome, Estado estado) {
		super();
		this.nome = nome;
		this.estado = estado;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}
}
