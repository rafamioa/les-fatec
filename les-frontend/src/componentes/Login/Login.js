import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Input from "../Form/Input";
import useForm from "../../hooks/useForm";
import Mensagem from "../Mensagem/Mensagem";

const Login = () => {
  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });

  const email = useForm("email");
  const senha = useForm("senha");

  const navegacao = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && senha.validate()) {
      console.log("login");
      navegacao("/conta/pedidos");
    } else {
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Erro ao efetuar o login!!",
      });
      console.log("Erro de login");
    }
  }

  return (
    <>
      <Navbar links={null} />
      <div className="container mt-5">
        <div className="offset-md-4 col-md-4">
          {mensagem.status && (
            <Mensagem
              mensagem={mensagem.mensagem}
              status={mensagem.status}
              tipo={mensagem.tipo}
            />
          )}
          <h1 className="text-center">
            <i className="fa fa-user icone text-secondary"></i>
          </h1>

          <div className="dropdown-divider my-4"></div>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-envelope" />
                </div>
              </div>
              <Input type="text" placeholder="E-mail" id="email" {...email} />
            </div>
            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-lock" />
                </div>
              </div>
              <Input
                type="password"
                className="form-control"
                placeholder="Senha"
                id="senha"
                {...senha}
              />
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="form-control btn btn-secondary border border-dark"
                id="login"
              >
                Entrar
              </button>
            </div>
            <div className="form-group">
              <p className="text-center">Não possui cadastro?</p>
              <p className="text-center">
                <Link to={"/cadastro"} className="text-secondary text-center">
                  cadastre-se clicando aqui
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
