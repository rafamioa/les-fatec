import React, { useState } from "react";
import Input from "../Form/Input";
import useForm from "../../hooks/useForm";
import Mensagem from "../Mensagem/Mensagem";
import { unMask } from "remask";

const DadosPessoais = ({ cliente }) => {
  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });
  const [genero, setGenero] = useState("M");
  const nome = useForm("nome");
  const cpf = useForm("cpf");
  const dataDeNascimento = useForm("dataDeNascimento");
  const telefone = useForm("telefone");
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (
      nome.validate() &&
      cpf.validate() &&
      dataDeNascimento.validate() &&
      telefone.validate()
    ) {
      setMensagem({
        status: true,
        tipo: "sucesso",
        mensagem: "Cadastrado com sucesso",
      });
      // navegacao("/conta/pedidos");
    } else {
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Verifique se todos os dados estão corretos",
      });
      console.log("Não enviar");
    }
  }

  return (
    <>
      <h2>Meus Dados</h2>
      <div className="dropdown-divider"></div>
      {mensagem.status && (
        <Mensagem
          mensagem={mensagem.mensagem}
          status={mensagem.status}
          tipo={mensagem.tipo}
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="Nome"
              id="nome"
              type="text"
              placeholder="João da Silva"
              {...nome}
              campo={cliente.nome}
            />
          </div>
          <div className="col-md-6 form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="CPF"
              type="text"
              placeholder="000.000.000-00"
              {...cpf}
              campo={cliente.cpf}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <span className="text-danger mr-1">*</span>
              <Input
                label="Email"
                type="text"
                placeholder="joao@gmail.com"
                {...email}
                campo={cliente.email}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <span className="text-danger mr-1">*</span>
              <Input
                label="Data de Nascimento"
                type="text"
                placeholder="dd/mm/aaaa"
                {...dataDeNascimento}
                campo={cliente.dataDeNascimento}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="genero">
              <span className="text-danger mr-1">*</span>Gênero
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                value="M"
                checked={genero === "M"}
                onChange={({ target }) => setGenero("M")}
              />
              <label className="form-check-label">masculino</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="genero"
                value="F"
                checked={genero === "F"}
                onChange={({ target }) => setGenero("F")}
              />
              <label className="form-check-label">feminino</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <span className="text-danger mr-1">*</span>
              <Input
                label="Telefone"
                type="text"
                placeholder="(11) 99654-7894"
                {...telefone}
                campo={cliente.telefone}
              />
            </div>
          </div>
        </div>
        <button className="btn btn-secondary">Salvar as alterações</button>
      </form>
    </>
  );
};

export default DadosPessoais;
