package br.gov.sp.fatec.APIRestJavaSpring.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.gov.sp.fatec.APIRestJavaSpring.daos.ClienteDAO;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

@Service
public class Fachada implements IFachada{
	
	@Autowired
	private  ClienteDAO clienteDAO;
	
	private Map<String, ClienteDAO> daos;
	
	public Fachada(){
		daos = new HashMap<String, ClienteDAO>();
		daos.put(Cliente.class.getName(), clienteDAO);	
	}

	@Override
	public EntidadeDominio salvar(EntidadeDominio entidade) {	
		String nomeDaClasse = entidade.getClass().getName();
		return clienteDAO.save(entidade); // direto dá certo, salva no banco
//		return  daos.get(nomeDaClasse).save(entidade); // null em clienteDAO
	}

	@Override
	public EntidadeDominio alterar(EntidadeDominio entidade) {
		return null;
	}

	@Override
	public EntidadeDominio excluir(EntidadeDominio entidade) {
		return null;
	}

	@Override
	public EntidadeDominio consultar(EntidadeDominio entidade) {
		return null;
	}

	@Override
	public EntidadeDominio visualizar(EntidadeDominio entidade) {
		return null;
	}
}
