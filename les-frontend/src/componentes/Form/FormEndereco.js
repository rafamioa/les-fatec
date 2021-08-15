import React from "react";
import { estados } from "../../dados/estados.js";

const FormEndereco = () => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="cep"><span className="text-danger mr-1">*</span>CEP</label>
          <input
            type="text"
            className="form-control"
            placeholder="00000-00"
            name="cep"
            id="cep"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="numero"><span className="text-danger mr-1">*</span>Número</label>
          <input
            type="text"
            className="form-control"
            placeholder="10"
            name="numero"
            id="numero"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="logradouro"><span className="text-danger mr-1">*</span>Logradouro</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dr. Washington da Silva"
            name="logradouro"
            id="logradouro"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="numero"><span className="text-danger mr-1">*</span>Bairro</label>
          <input
            type="text"
            className="form-control"
            placeholder="Vl. Aparecida"
            name="bairro"
            id="bairro"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="cidade"><span className="text-danger mr-1">*</span>Cidade</label>
          <input
            type="text"
            name="cidade"
            className="form-control"
            placeholder="Mogi das Cruzes"
            id="cidade"
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="estado"><span className="text-danger mr-1">*</span>Estado</label>
          <select name="estado" id="estado" className="form-control">
            {estados.map((estado, index) => (
              <option value="apartamento" key={index}>
                {estado}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="pais"><span className="text-danger mr-1">*</span>País</label>
          <select name="pais" id="pais" className="form-control">
            <option value="Brasil">Brasil</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="tipo_de_endereco"><span className="text-danger mr-1">*</span>Tipo de endereço</label>
          <select name="tipoDeEndereco" id="tipoDeEndereco" className="form-control">
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="observacoes">Observação</label>
          <input type="text" className="form-control" name="observacoes" id="observacoes" placeholder="Não obrigatório"/>
        </div>
      </div>
      <div className="form-group" >
        <label htmlFor="descrição"><span className="text-danger mr-1">*</span>Descrição</label>
        <textarea className="form-control" name="descricao" id="descricao" placeholder="Descrição curta para identificação"/>
      </div>
    </>
  );
};

export default FormEndereco;
