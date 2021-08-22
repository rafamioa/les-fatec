import React, { useState } from "react";
import Mensagem from "../Mensagem/Mensagem";
import Input from "../Form/Input";
import useForm from "../../hooks/useForm";
import Sidebar from "./Sidebar";

const AlterarSenha = () => {
  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });
  const senhaAtual = useForm("senha");
  const senhaNova = useForm("senha");
  const senhaRepetida = useForm("senha");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      senhaAtual.validate() &&
      senhaNova.validate() &&
      senhaRepetida.validate() &&
      senhaAtual.value !== senhaNova.value &&
      senhaAtual.value !== senhaRepetida.value &&
      senhaNova.value === senhaRepetida.value
    ) {
      setMensagem({
        status: true,
        tipo: "sucesso",
        mensagem: "Senha Alterada com sucesso",
      });
    } else if (
      senhaAtual.value === senhaNova.value ||
      senhaAtual.value === senhaRepetida.value
    ) {
      console.log("1");
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "A senha nova não pode ser igual a senha atual",
      });
      console.log("Não enviar");
    } else if (senhaNova.value !== senhaRepetida.value) {
      console.log("2");
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "A senha nova foi preenchida diferente ao repetir a senha",
      });
      console.log("Não enviar");
    } else {
      console.log("3");
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Erro ao alterar a senha",
      });
      console.log("Não enviar");
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2>Alterar a senha</h2>
            {mensagem.status && (
              <Mensagem
                mensagem={mensagem.mensagem}
                status={mensagem.status}
                tipo={mensagem.tipo}
              />
            )}
            <div className="dropdown-divider"></div>
            <p>
              A senha deve ser composta de pelo menos 8 caracteres, ter letras
              maiúsculas e minúsculas além de conter caracteres especiais.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group col-md-4">
                <label>Senha Atual</label>
                <Input
                  className="form-control"
                  name="senhaAtual"
                  id="senhaAtual"
                  type="password"
                  placeholder="Digite sua atual senha"
                  {...senhaAtual}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Nova senha</label>
                <Input
                  className="form-control"
                  type="password"
                  name="senhaNova"
                  id="senhaNova"
                  placeholder="Digite a sua nova senha"
                  {...senhaNova}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Repetir a senha</label>
                <Input
                  className="form-control"
                  name="senhaRepetida"
                  id="senhaRepetida"
                  type="password"
                  placeholder="Digite a nova senha"
                  {...senhaRepetida}
                />
              </div>
              <div className="form-group col-md-4">
                <button className="btn btn-secondary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlterarSenha;
