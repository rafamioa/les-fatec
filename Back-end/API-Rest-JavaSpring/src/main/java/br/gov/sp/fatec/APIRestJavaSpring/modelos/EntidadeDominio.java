package br.gov.sp.fatec.APIRestJavaSpring.modelos;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EntidadeDominio implements IEntidade{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

}
