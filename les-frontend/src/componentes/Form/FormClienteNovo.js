import React, { useState } from "react";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import { estados } from "../../dados/estados";
import { tiposLogradouro } from "../../dados/tiposLogradouro";

const FormClienteNovo = () => {

  return (
    <>
    <h1 className="text-center">Cadastre-se</h1>
    <div className="dropdown-divider my-5"></div>
      <div className="form-group">
        <span className="text-danger mr-1">*</span>
        <Input
          label="Nome"
          id="nome"
          type="text"
          placeholder="João da Silva"
          {...nome}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="CPF"
              type="text"
              placeholder="000.000.000-00"
              {...cpf}
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
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="Email"
              type="text"
              placeholder="joao@gmail.com"
              {...email}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="Senha"
              type="text"
              placeholder="#seNha21"
              {...senha}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <span className="text-danger mr-1">*</span>
            <Input
              label="Repita a senha"
              type="text"
              placeholder="#seNha21"
              {...repitaSenha}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormClienteNovo;
