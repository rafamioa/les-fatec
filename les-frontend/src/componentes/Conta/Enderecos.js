import React from "react";
import Endereco from "./Endereco";
import { Link } from "react-router-dom";

const ENDERECOS = [
  {
    logradouro: "Rua Dr. Daniel da Costa",
    bairro: "Vl. Sônia",
    cidade: "Mogi das Cruzes",
    estado: "SP",
    pais: "Brasil",
    numero: 20,
    tipoDeEndereco: "Residencial",
    tipoDeLogradouro:"rua",
    cep: "08720-501",
    observacao: "",
    descricao: "Minha casa",
    enderecoDeEntrega: true,
    enderecoDeCobranca: true
  },
  {
    logradouro: "Avenida dona Ruth",
    bairro: "Vl. Jesse",
    cidade: "Mogi das Cruzes",
    estado: "SP",
    pais: "Brasil",
    numero: 30,
    tipoDeEndereco: "Comercial",
    tipoDeLogradouro:"rua",
    cep: "03587-789",
    observacao: "",
    descricao: "Casa da minha mãe",
    enderecoDeEntrega: true,
    enderecoDeCobranca: false
  },
];

const Enderecos = () => {
  return (
    <>
      <h2>Meus Endereços</h2>
      <div className="dropdown-divider"></div>
      <div className="row">
        {ENDERECOS.map((endereco) => (
          <Endereco endereco={endereco} key={endereco.numero} />
        ))}
      </div>
      <Link to="novo" className="btn btn-light border border-dark mt-5">
        Adicionar novo endereço
      </Link>
    </>
  );
};

export default Enderecos;
