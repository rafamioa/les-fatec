import React from "react";

const CARTOES = ["Mastercard", "Visa", "Elo"];

const FormCartao = () => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-6">
          <label forHtml="nomeDoCartao">Nome impresso no cartão</label>
          <input
            type="text"
            name="nomeDoCartao"
            id="nomeDoCartao"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label forHtml="numeroDoCartao">Número do cartão</label>
          <input
            type="text"
            name="numeroDoCartao"
            id="numeroDoCartao"
            className="form-control"
          />
        </div>
      </div>
      <div className="row ">
        <div className="form-group col-md-6">
          <label forHtml="codigoDoCartao">Código de segurança</label>
          <input
            type="text"
            name="codigoDoCartao"
            id="codigoDoCartao"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="bandeiraDoCartao">Bandeira do cartão</label>
          <select
            name="bandeiraDoCartao"
            className="form-control"
          >
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FormCartao;
