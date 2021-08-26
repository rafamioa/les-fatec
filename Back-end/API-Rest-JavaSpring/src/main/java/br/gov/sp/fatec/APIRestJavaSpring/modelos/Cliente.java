package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import java.io.Serializable;

import javax.persistence.Entity;

@Entity(name="clientes")
public class Cliente  extends EntidadeDominio implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String nome;
//	private Date dataDeNascimento;
	private String cpf;
	private String genero;
	private String telefone;
	private String email;
	private String senha;
	
	public Cliente() {}
	
	public Cliente(String nome, String cpf, String genero, String telefone, String email, String senha) {
		this.nome = nome;
		this.cpf = cpf;
		this.genero = genero;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
	}
	//	public Long getId() {
//		return id;
//	}
//	public void setId(Long id) {
//		this.id = id;
//	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
//	public Date getDataDeNascimento() {
//		return dataDeNascimento;
//	}
//	public void setDataDeNascimento(Date dataDeNascimento) {
//		this.dataDeNascimento = dataDeNascimento;
//	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
}
