import React from "react";
import Sidebar from "./Sidebar";
import FormCartao from "../Form/FormCartao";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CartaoNovo = () => {
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
            <h2>Cadastrar um novo cartão</h2>
            <div className="dropdown-divider my-3"></div>
            <FormCartao />
            <button onClick={handleClick} className="btn btn-secondary">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartaoNovo;
