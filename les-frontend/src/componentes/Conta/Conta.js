import React from "react";
import Sidebar from "./Sidebar";
import DadosPessoais from "./DadosPessoais";
import Cupons from "./Cupons";
import Enderecos from "./Enderecos";
import EnderecoNovo from "./EnderecoNovo";
import Pedidos from "./Pedidos";
import Cartoes from "./Cartoes";
import FormCartao from "../Form/FormCartao";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AlterarSenha from "./AlterarSenha";


const Conta = (props) => {
  const [cliente, setCliente] = React.useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    dataDeNascimento: "",
    senha: "",
    genero: "masculino",
    cep: "",
    bairro: "",
    logradouro: "",
    numero: "",
    cidade: "",
    estado: "",
    tipoDeEndereco: "",
    nomeDoCartao: "",
    numeroDoCartao: "",
    codigoDoCartao: "",
    bandeiraDoCartao: "visa",
    enderecos: [
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
    ],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log();
    setCliente({
      ...cliente,
      [name]: value,
    });
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
