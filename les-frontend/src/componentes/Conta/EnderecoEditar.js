import React from "react";
import Sidebar from "./Sidebar";
import FormEndereco from "../Form/FormEndereco";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const EnderecoEditar = () => {
  const navegacao = useNavigate();

  function handleClick(){
    navegacao("/conta/enderecos");
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
          <h2>Editar endereço</h2>
          <div className="dropdown-divider my-3"></div>
          <FormEndereco />
          <button onClick={handleClick} className="btn btn-secondary">Salvar as alterações</button>
        </div>

      </div>
    </div>
    </>
  );
};

export default EnderecoEditar;
