package br.gov.sp.fatec.APIRestJavaSpring.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/cliente")
public class ClienteController {
	
	@GetMapping
	public String cadastrar() {
		return "cadastrado";
	}
}
