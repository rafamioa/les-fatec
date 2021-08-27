package br.gov.sp.fatec.APIRestJavaSpring.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;

@Repository
public interface IDAO extends JpaRepository<EntidadeDominio, Long>{

}
