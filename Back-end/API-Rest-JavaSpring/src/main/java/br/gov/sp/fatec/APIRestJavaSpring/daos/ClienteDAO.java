package br.gov.sp.fatec.APIRestJavaSpring.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;

@Repository
public interface ClienteDAO extends JpaRepository<Cliente, Long>  {

}
