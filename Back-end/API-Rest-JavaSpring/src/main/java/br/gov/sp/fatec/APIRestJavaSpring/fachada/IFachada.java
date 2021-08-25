package br.gov.sp.fatec.APIRestJavaSpring.fachada;

import java.util.Optional;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

public interface IFachada {
	
	public Optional<EntidadeDominio> salvar(EntidadeDominio entidade);
	public Optional<EntidadeDominio> alterar(EntidadeDominio entidade);
	public Optional<EntidadeDominio> excluir(EntidadeDominio entidade);
	public Optional<EntidadeDominio> consultar(EntidadeDominio entidade);
	public Optional<EntidadeDominio> visualizar(EntidadeDominio entidade);

}
