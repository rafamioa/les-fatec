package br.gov.sp.fatec.APIRestJavaSpring.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

public interface IDAO extends JpaRepository<EntidadeDominio, Long>{

}
