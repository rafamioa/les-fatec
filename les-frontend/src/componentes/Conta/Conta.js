import React from "react";
import Sidebar from "./Sidebar";
import DadosPessoais from "./DadosPessoais";
import Cupons from "./Cupons";
import Enderecos from "./Enderecos";
import Pedidos from "./Pedidos";
import Cartoes from "./Cartoes";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AlterarSenha from "./AlterarSenha";

const Conta = (props) => {

  return (
    <>
      <Navbar links={[{ link: "Sair", to: "/" }]} />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <Routes>
              <Route path="pedidos" element={<Pedidos />} />
              <Route path="dados" element={<DadosPessoais />} />
              <Route path="enderecos" element={<Enderecos />} />
              <Route path="cartoes" element={<Cartoes />} />
              <Route path="cupons" element={<Cupons />} />
              <Route path="senha" element={<AlterarSenha />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default Conta;
