import React from "react";

const AlterarSenha = () => {
  return (
    <>
      <h2>Alterar a senha</h2>
      <div className="dropdown-divider"></div>
      <p>
        A senha deve ser composta de pelo menos 8
        caracteres, ter letras maiúsculas e minúsculas além de conter caracteres
        especiais.
      </p>
      <form>
        <div className="form-group col-md-4">
          <label>Nova senha</label>
          <input
            className="form-control"
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite a sua senha"
          />
        </div>
        <div className="form-group col-md-4">
          <label>Repetir a senha</label>
          <input
            className="form-control"
            name="senhaRepetida"
            id="senhaRepetida"
            type="password"
            placeholder="Digite a nova senha"
          />
        </div>
        <div className="form-group col-md-4">
          <button className="btn btn-secondary">Salvar</button>
        </div>
      </form>
    </>
  );
};

export default AlterarSenha;
