import React from "react";
import Cartao from "./Cartao";
import { Link } from "react-router-dom";

const CARTOES = [
  {
    nomeDoCartao: "João da Silva",
    numeroDoCartao: "1111 2222 3333 4444",
    codigoDoCartao: "1234",
    bandeiraDoCartao: "Visa",
  },
];

const Cartoes = () => {

  return (
    <>
      <h2>Meus Cartões</h2>
      <div className="dropdown-divider"></div>
      <div className="row">
        {CARTOES.map((cartao) => (
          <Cartao cartao={cartao} key={cartao.codigoDoCartao} />
        ))}
      </div>
      <Link
        to="novo"
        className="btn btn-light border border-dark mt-5"
      >
        Adicionar novo cartão
      </Link>
    </>
  );
};

export default Cartoes;
