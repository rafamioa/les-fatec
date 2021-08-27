package br.gov.sp.fatec.APIRestJavaSpring.services;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

public interface IFachada {
	
	public EntidadeDominio salvar(EntidadeDominio entidade);
	public EntidadeDominio alterar(EntidadeDominio entidade);
	public EntidadeDominio excluir(EntidadeDominio entidade);
	public EntidadeDominio consultar(EntidadeDominio entidade);
	public EntidadeDominio visualizar(EntidadeDominio entidade);

}
