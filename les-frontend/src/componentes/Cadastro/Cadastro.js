import React, { Component } from "react";
import { estados } from "./estados.js";

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
      genero: "masculino",
      cep: "",
      bairro: "",
      logradouro: "",
      numero: "",
      cidade: "",
      estado: "",
      tipoDeEndereco: "",
      enderecos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  async handleBlur(e) {
    const cep = this.state.cep;
    const { bairro, logradouro, localidade, uf } = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    ).then((response) => response.json().catch((erro) => console.lgo(erro)));
    this.setState({
      bairro,
      logradouro,
      estado: uf,
      cidade:localidade
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const endereco = {
      logradouro: this.state.logradouro,
      estado: this.state.estado,
      numero: this.state.numero,
    };
    const enderecos = this.state.enderecos;
    enderecos.push(endereco);
    this.setState({
      enderecos: [...enderecos],
    });
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
                    value="masculino"
                    checked={this.state.genero === "masculino"}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label">masculino</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="feminino"
                    checked={this.state.genero === "feminino"}
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
            <h2 className="my-5 text-center">Endereço</h2>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="00000-00"
                  name="cep"
                  value={this.state.cep}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="10"
                  name="numero"
                  value={this.state.numero}
                  onChange={this.handleChange}
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
                  value={this.state.logradouro}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="numero">Bairro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vl. Aparecida"
                  name="bairro"
                  value={this.state.bairro}
                  onChange={this.handleChange}
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
                  value={this.state.cidade}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="estado">Estado</label>
                <select
                  name="estado"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.estado}
                >
                  {estados.map((estado, index) => (
                    <option value="apartamento" key={index}
                    selected={this.state.estado === estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="tipo_de_endereco">Tipo de endereço</label>
                <select
                  name="tipoDeEndereco"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.tipoDeEndereco}
                >
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="observacoes">Observação</label>
                <input
                  type="text"
                  className="form-control"
                  name="observacoes"
                  value={this.state.observacao}
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
