package br.gov.sp.fatec.APIRestJavaSpring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;
import br.gov.sp.fatec.APIRestJavaSpring.modelos.EntidadeDominio;
import br.gov.sp.fatec.APIRestJavaSpring.services.IFachada;

@RestController
@RequestMapping(path = "/cliente")
//@CrossOrigin(origins = { "http://localhost:3000" })
public class ClienteController {
	
	@Autowired
	private IFachada fachada;
	
	@PostMapping
	public ResponseEntity<Cliente> cadastrar(@RequestBody Cliente entidade) {
		EntidadeDominio resultado = fachada.salvar(entidade);
		return ResponseEntity.ok().body((Cliente)resultado);
	}
}
