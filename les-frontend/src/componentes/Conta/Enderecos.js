import React from "react";
import Endereco from "./Endereco";
import FormEndereco from "../Form/FormEndereco";
import { Link } from "react-router-dom";

const ENDERECOS = [
  {
    logradouro: "Rua Dr. Daniel da Costa",
    bairro: "Vl. Sônia",
    cidade: "Mogi das Cruzes",
    estado: "SP",
    numero: 20,
    tipoDeEndereco: "Residencial",
    cep: "08720-501",
  },
  {
    logradouro: "Avenida dona Ruth",
    bairro: "Vl. Jesse",
    cidade: "Mogi das Cruzes",
    estado: "SP",
    numero: 30,
    tipoDeEndereco: "Comercial",
    cep: "03587-789",
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
