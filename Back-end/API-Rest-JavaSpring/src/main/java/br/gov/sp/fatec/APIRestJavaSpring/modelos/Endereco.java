package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name = "enderecos")
public class Endereco extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String logradouro;
	@Column(name = "tipos_logradouro")
	private String tipoLogradouro;
	private String cep;
	@Column(name = "tipo_residencia")
	private String tipoResidencia;
	private String bairro;
	private Long numero;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="cliente_id")
	private Cliente cliente;
	
	@ManyToOne
	@JoinColumn(name="cidade_id")
	private Cidade cidade;
	
	public Endereco() {}

	public Endereco(String logradouro, String tipoLogradouro, String cep, String tipoResidencia, String bairro,
			Long numero, Cliente cliente, Cidade cidade) {
		this.logradouro = logradouro;
		this.tipoLogradouro = tipoLogradouro;
		this.cep = cep;
		this.tipoResidencia = tipoResidencia;
		this.bairro = bairro;
		this.numero = numero;
		this.cliente = cliente;
		this.cidade = cidade;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getTipoLogradouro() {
		return tipoLogradouro;
	}

	public void setTipoLogradouro(String tipoLogradouro) {
		this.tipoLogradouro = tipoLogradouro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getTipoResidencia() {
		return tipoResidencia;
	}

	public void setTipoResidencia(String tipoResidencia) {
		this.tipoResidencia = tipoResidencia;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public Cidade getCidade() {
		return cidade;
	}

	public void setCidade(Cidade cidade) {
		this.cidade = cidade;
	}
}
