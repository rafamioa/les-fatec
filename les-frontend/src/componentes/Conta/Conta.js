import React from "react";
import DadosPessoais from "./DadosPessoais";
import Cupons from "./Cupons";
import Enderecos from "./Enderecos";
import Pedidos from "./Pedidos";
import ContaIndex from "./ContaIndex";
import Cartoes from "./Cartoes";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AlterarSenha from "./AlterarSenha";

const Conta = (props) => {
  // OBJETO CLIENTE
  const [cliente, setCliente] = React.useState({
    nome: "João da Silva Carvalho",
    email: "joão@email.com",
    cpf: "111.222.333-44",
    telefone: "(11) 4726-3078",
    dataDeNascimento: "01/01/1980",
    senha: "$fJda587#",
    genero: "M",
    enderecos: [
      {
        id: 1,
        logradouro: "Rua Dr. Daniel da Costa Chaves",
        bairro: "Vl. Sônia",
        cidade: "Mogi das Cruzes",
        estado: "SP",
        pais: "Brasil",
        numero: 20,
        tipoDeEndereco: "Residencial",
        tipoDeLogradouro: "rua",
        cep: "08720-501",
        observacao: "",
        descricao: "Minha casa",
        enderecoDeEntrega: true,
        enderecoDeCobranca: true,
      },
      {
        id: 2,
        logradouro: "Avenida dona Ruth",
        bairro: "Vl. Jesse",
        cidade: "Mogi das Cruzes",
        estado: "SP",
        pais: "Brasil",
        numero: 30,
        tipoDeEndereco: "Comercial",
        tipoDeLogradouro: "rua",
        cep: "03587-789",
        observacao: "",
        descricao: "Casa da minha mãe",
        enderecoDeEntrega: true,
        enderecoDeCobranca: false,
      },
    ],
    cartoes: [
      {
        id: 1,
        nomeDoCartao: "João da Silva",
        numeroDoCartao: "1111 2222 3333 4444",
        codigoDoCartao: "1234",
        bandeiraDoCartao: "Visa",
      },
    ],
  });

  // function onChange(e){
  //   const {name, value} = e.target;
  //   setCliente({...cliente, name: value});
  //   console.log(cliente);
  // }

  return (
    <>
      <Navbar links={[{ link: "Sair", to: "/" }]} />
      <Routes>
        <Route path="/" element={<ContaIndex />} />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="dados" element={<DadosPessoais cliente={cliente} />} />
        <Route
          path="enderecos/*"
          element={<Enderecos enderecos={cliente.enderecos} />}
        />
        <Route
          path="cartoes/*"
          element={<Cartoes cartoes={cliente.cartoes} />}
        />
        <Route path="cupons" element={<Cupons />} />
        <Route path="senha" element={<AlterarSenha />} />
      </Routes>
    </>
  );
};
export default Conta;
