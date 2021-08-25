package br.gov.sp.fatec.APIRestJavaSpring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.gov.sp.fatec.APIRestJavaSpring.daos.ClienteDAO;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteDAO dao; 
	
	public Cliente salvar(Cliente cliente){
		Cliente obj = dao.save(cliente);
		return  obj;
	}

}
