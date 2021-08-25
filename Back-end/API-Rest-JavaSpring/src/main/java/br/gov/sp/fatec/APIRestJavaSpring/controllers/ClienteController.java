package br.gov.sp.fatec.APIRestJavaSpring.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.gov.sp.fatec.APIRestJavaSpring.modelos.Cliente;

@RestController
@RequestMapping(path = "/cliente")
//@CrossOrigin(origins = { "http://localhost:3000" })
public class ClienteController {
	
	@PostMapping
	public ResponseEntity<Cliente> cadastrar(@RequestBody Cliente cliente) {
		System.out.println("cliente =>>>> " + cliente.getNome());
		return ResponseEntity.ok().body(cliente);
	}
}
