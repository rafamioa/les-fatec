import React from "react";
import { estados } from "../../dados/estados.js";

const FormEndereco = () => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            className="form-control"
            placeholder="00000-00"
            name="cep"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            className="form-control"
            placeholder="10"
            name="numero"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="logradouro">Logradouro</label>
          <input
            type="text"
            className="form-control"
            placeholder="Dr. Washington da Silva"
            name="logradouro"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="numero">Bairro</label>
          <input
            type="text"
            className="form-control"
            placeholder="Vl. Aparecida"
            name="bairro"
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            name="cidade"
            className="form-control"
            placeholder="Mogi das Cruzes"
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="estado">Estado</label>
          <select name="estado" className="form-control">
            {estados.map((estado, index) => (
              <option value="apartamento" key={index}>
                {estado}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="pais">País</label>
          <select name="pais" className="form-control">
            <option value="Brasil">Brasil</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="tipo_de_endereco">Tipo de endereço</label>
          <select name="tipoDeEndereco" className="form-control">
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="observacoes">Observação</label>
          <input type="text" className="form-control" name="observacoes" id="observacoes"/>
        </div>
      </div>
      <div className="form-group" >
        <label htmlFor="descrição">Descrição</label>
        <textarea className="form-control" name="descricao" id="descricao"/>
      </div>
    </>
  );
};

export default FormEndereco;
