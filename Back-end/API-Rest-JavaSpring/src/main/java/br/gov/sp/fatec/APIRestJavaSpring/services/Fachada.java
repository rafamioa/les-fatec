package br.gov.sp.fatec.APIRestJavaSpring.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.gov.sp.fatec.APIRestJavaSpring.daos.IDAO;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

@Service
public class Fachada implements IFachada{

//	private Map<String, IDAO> daos;
	@Autowired
	private IDAO dao;
	
	public Fachada(){

//		daos = new HashMap<String, IDAO>();
//		ClienteRepositoryCustomerImpl clienteRepositoryCustomerImpl = new ClienteRepositoryCustomerImpl();
//		daos.put(Cliente.class.getName(),  clienteRepositoryCustomerImpl);	
	}
	
	@Transactional
	@Override
	public EntidadeDominio salvar(EntidadeDominio entidade) {	
//		String nomeDaClasse = entidade.getClass().getName();
//		return clienteDAO.save(entidade); // direto dá certo, salva no banco
		return   dao.save(entidade); // null em clienteDAO
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
