import React from "react";
import Sidebar from "./Sidebar";

const AlterarSenha = () => {
  return (
    <>
      <h2>Alterar a senha</h2>
      <div className="dropdown-divider"></div>
      <form>
        <div className="form-group col-md-4">
          <label>Senha</label>
          <input className="form-control" name="senha" id="senha" />
        </div>
        <div className="form-group col-md-4">
          <label>Nova senha</label>
          <input className="form-control" name="novaSenha" id="novaSenha" />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-secondary">Salvar</button>
        </div>
      </form>
    </>
  );
};

export default AlterarSenha;
