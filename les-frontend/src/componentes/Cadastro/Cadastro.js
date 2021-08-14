import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormEndereco from "../Form/FormEndereco";
import FormCliente from "../Form/FormCliente";
import FormCartao from "../Form/FormCartao";
import Navbar from "../Navbar/Navbar";

const Cadastro = () => {
  const navegacao = useNavigate();

  const [cliente, setCliente] = useState({
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
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cliente);
    navegacao("/conta/pedidos");
  }

  React.useEffect(() => {
    console.log("alterou", cliente);
  }, [cliente]);

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
      <Navbar links={[{ link: "entrar", to: "/login" }]} />
      <div className="container mt-5">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Cadastre-se</h1>
          <div className="dropdown-divider my-4"></div>
          <form onSubmit={handleSubmit}>
            <FormCliente
              cliente={cliente}
              setCliente={setCliente}
              handleChange={handleChange}
            />
            <h2 className="my-5 text-center">Endereço</h2>
            <FormEndereco
              cliente={cliente}
              setCliente={setCliente}
              handleChange={handleChange}
            />
            <h2 className="my-5 text-center">Cartão</h2>
            <FormCartao
              cliente={cliente}
              setCliente={setCliente}
              handleChange={handleChange}
            />
            <div className="row">
              <div className="form-group col-md-6">
                <button
                  type="submit"
                  className="form-control btn btn-secondary border border-dark"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Cadastro;
