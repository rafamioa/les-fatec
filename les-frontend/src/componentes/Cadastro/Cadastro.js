import React, { Component } from "react";

export default class Cadastro extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      dataDeNascimento: "",
      senha: "",
      genero: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      cliente: { [name]: value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Cadastre-se</h1>
          <div className="dropdown-divider my-4"></div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nome completo"
                name="nome"
                id="nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  name="cpf"
                  placeholder="cpf: 000.000.000-00"
                  id="cpf"
                  value={this.state.cpf}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="data_de_nascimento">Data de Nascimento</label>
                <input
                  type="text"
                  className="form-control"
                  name="dataDeNascimento"
                  placeholder="01/01/2000"
                  id="data_de_nascimento"
                  value={this.state.dataDeNascimento}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="genero">Gênero</label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value={this.state.genero}
                    checked
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">masculino</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value={this.state.genero}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">feminino</label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="teleone">Telefone</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefone"
                  placeholder="(11) 1111-1111"
                  id="telefone"
                  value={this.state.telefone}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Digite um email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  name="senha"
                  id="senha"
                  placeholder="Digite uma senha"
                  value={this.state.senha}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <button
                  type="submit"
                  className="form-control btn btn-secondary border border-dark"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
