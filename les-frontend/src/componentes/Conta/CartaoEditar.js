import React from "react";
import Sidebar from "./Sidebar";
import FormCartao from "../Form/FormCartao";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CartaoEditar = () => {
  const navegacao = useNavigate();

  function handleClick() {
    navegacao("/conta/cartoes");
  }

  return (
    <>
      <Navbar links={[{ link: "Sair", to: "/" }]} />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <h2>Editar cartão</h2>
            <div className="dropdown-divider my-3"></div>
            <FormCartao />
            <button onClick={handleClick} className="btn btn-secondary">
              Salvar as alterações
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartaoEditar;
