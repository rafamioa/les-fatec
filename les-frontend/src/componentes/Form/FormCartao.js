import React from "react";

const CARTOES = ["Mastercard", "Visa", "Elo"];

const FormCartao = () => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-6">
          <label forHtml="nomeDoCartao"><span className="text-danger mr-1">*</span>Nome impresso no cartão</label>
          <input
            type="text"
            name="nomeDoCartao"
            id="nomeDoCartao"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label forHtml="numeroDoCartao"><span className="text-danger mr-1">*</span>Número do cartão</label>
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
          <label forHtml="codigoDoCartao"><span className="text-danger mr-1">*</span>Código de segurança</label>
          <input
            type="text"
            name="codigoDoCartao"
            id="codigoDoCartao"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="bandeiraDoCartao"><span className="text-danger mr-1">*</span>Bandeira do cartão</label>
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
