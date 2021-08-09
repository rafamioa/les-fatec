import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="offset-md-4 col-md-4">
          <h1 className="text-center">
            <i className="fa fa-user icone text-secondary"></i>
          </h1>

          <div className="dropdown-divider my-4"></div>
          <form action="">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-envelope" />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                name="email"
                id="email"
              />
            </div>
            <div className="input-group mt-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-unlock-alt" />
                </div>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="Senha"
                name="senha"
                id="senha"
              />
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="form-control btn btn-secondary border border-dark"
                id="login"
              >
                Logar
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
    );
  }
}
