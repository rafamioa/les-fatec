import React from "react";
import { estados } from "../../dados/estados.js";

const FormCliente = ({cliente, setCliente, handleChange}) => {

  return (
    <>
      <div className="form-group">
        <label htmlFor="nome"><span className="text-danger mr-1">*</span>Nome completo</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nome completo"
          name="nome"
          id="nome"
          value={cliente.nome}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="cpf"><span className="text-danger mr-1">*</span>CPF</label>
          <input
            type="text"
            className="form-control"
            name="cpf"
            placeholder="cpf: 000.000.000-00"
            id="cpf"
            value={cliente.cpf}
            onChange={handleChange}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="data_de_nascimento"><span className="text-danger mr-1">*</span>Data de Nascimento</label>
          <input
            type="text"
            className="form-control"
            name="dataDeNascimento"
            placeholder="01/01/2000"
            id="data_de_nascimento"
            value={cliente.dataDeNascimento}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="genero"><span className="text-danger mr-1">*</span>Gênero</label>
          <br />
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              value="masculino"
              checked={cliente.genero === "masculino"}
              onChange={handleChange}
            />
            <label className="form-check-label">masculino</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              value="feminino"
              checked={cliente.genero === "feminino"}
              onChange={handleChange}
            />
            <label className="form-check-label">feminino</label>
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="teleone"><span className="text-danger mr-1">*</span>Telefone</label>
          <input
            type="text"
            className="form-control"
            name="telefone"
            placeholder="(11) 1111-1111"
            id="telefone"
            value={cliente.telefone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="email"><span className="text-danger mr-1">*</span>E-mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Digite um email"
            value={cliente.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="senha"><span className="text-danger mr-1">*</span>Senha</label>
          <input
            type="password"
            className="form-control"
            name="senha"
            id="senha"
            placeholder="Digite uma senha"
            value={cliente.senha}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default FormCliente;
