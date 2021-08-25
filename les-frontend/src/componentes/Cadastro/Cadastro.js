import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";
import useForm from "../../hooks/useForm";
import { estados } from "../../dados/estados";
import { tiposLogradouro } from "../../dados/tiposLogradouro";
import Mensagem from "../Mensagem/Mensagem";
import axios from "axios";

const TIPOS_DE_ENDERECO = ["apartamento", "casa", "comercial"];

const Cadastro = () => {
  const [genero, setGenero] = useState("M");
  const [estado, setEstado] = useState("SP");
  const [pais, setPais] = useState("Brasil");
  const [tipoDeEndereco, setTipoDeEndereco] = useState("comercial");
  const [tipoDeLogradouro, setTipoDeLogradouro] = useState("rua");
  const enderecoDeEntrega = true;
  const enderecoDeCobranca = true;
  const [observacao, setObservacao] = useState("");

  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });

  const navegacao = useNavigate();
  // Dados Pessoais
  const nome = useForm("nome");
  const cpf = useForm("cpf");
  const dataDeNascimento = useForm("dataDeNascimento");
  const telefone = useForm("telefone");
  const email = useForm("email");
  const senha = useForm("senha");
  const repitaSenha = useForm("senha");
  // Dados de Endereço
  const cep = useForm("cep");
  const numero = useForm("numero");
  const logradouro = useForm("logradouro");
  const bairro = useForm("bairro");
  const cidade = useForm("cidade");
  const descricao = useForm("descricao");

  async function handleSubmit(event) {
    event.preventDefault();
    // if (
    //   nome.validate() &&
    //   // cpf.validate() &&
    //   // dataDeNascimento.validate() &&
    //   // telefone.validate() &&
    //   // email.validate() &&
    //   // senha.validate() &&
    //   // repitaSenha.validate() &&
    //   // senha.value === repitaSenha.value &&
    //   // cep.validate() &&
    //   // numero.validate() &&
    //   // logradouro.validate() &&
    //   // bairro.validate() &&
    //   // cidade.validate() &&
    //   // descricao.validate() &&
    //   // cep.validate()
    // )
    if (nome) {
      const cliente = Object.create(Object.prototype, {
        nome,
        cpf,
        telefone,
        email,
        senha,
      });
      const c = Object.assign(cliente, { genero: genero });
      const novoCliente = Object.assign(cliente, {
        genero: genero,
        estado,
        pais,
        observacao,
        tipoDeEndereco,
        tipoDeLogradouro,
        enderecoDeEntrega,
        enderecoDeCobranca,
      });
      setMensagem({
        status: true,
        tipo: "sucesso",
        mensagem: "Cadastrado com sucesso",
      });
      const resposta = await axios
        .post(`http://localhost:8080/cliente`, {
          nome: novoCliente.nome,
          cpf: novoCliente.cpf,
          genero: novoCliente.genero,
          telefone: novoCliente.telefone,
          email: novoCliente.email,
          senha: novoCliente.senha,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
      // await fetch("http://localhost:8080/cliente", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     cliente,
      //   }),
      // })
      //   .then((response) => {
      //     console.log("response", response);
      //     return response.json();
      //   })
      //   .then((json) => {
      //     console.log("json", json);
      //     return json;
      //   });
      // console.log("cliente ->>>", cliente);

      // console.log(novoCliente);
      // navegacao("/conta/pedidos");
    } else {
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Verifique se todos os dados estão corretos",
      });
      console.log("Não enviar");
    }
  }

  return (
    <>
      <Navbar links={[{ link: "entrar", to: "/login" }]} />
      <div className="container mt-5">
        <div className="col-md-6 offset-md-3">
          {mensagem.status && (
            <Mensagem
              mensagem={mensagem.mensagem}
              status={mensagem.status}
              tipo={mensagem.tipo}
            />
          )}
          <h1 className="text-center">Cadastre-se</h1>
          <div className="dropdown-divider my-5"></div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <span className="text-danger mr-1">*</span>
              <Input
                label="Nome"
                id="nome"
                type="text"
                placeholder="João da Silva"
                {...nome}
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="CPF"
                    type="text"
                    placeholder="000.000.000-00"
                    {...cpf}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="Data de Nascimento"
                    type="text"
                    placeholder="dd/mm/aaaa"
                    {...dataDeNascimento}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="genero">
                  <span className="text-danger mr-1">*</span>Gênero
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="M"
                    checked={genero === "M"}
                    onChange={({ target }) => setGenero("M")}
                  />
                  <label className="form-check-label">masculino</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genero"
                    value="F"
                    checked={genero === "F"}
                    onChange={({ target }) => setGenero("F")}
                  />
                  <label className="form-check-label">feminino</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="Telefone"
                    type="text"
                    placeholder="(11) 99654-7894"
                    {...telefone}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="Email"
                    type="text"
                    placeholder="joao@gmail.com"
                    {...email}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="Senha"
                    type="password"
                    placeholder="#seNha21"
                    {...senha}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <span className="text-danger mr-1">*</span>
                  <Input
                    label="Repita a senha"
                    type="password"
                    placeholder="#seNha21"
                    {...repitaSenha}
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-5 text-center">Endereço</h1>
            <div className="dropdown-divider my-5"></div>
            <div className="row">
              <div className="form-group col-md-4">
                <span className="text-danger mr-1">*</span>
                <Input
                  label="CEP"
                  type="text"
                  placeholder="08720-350"
                  {...cep}
                />
              </div>
              <div className="form-group col-md-8">
                <span className="text-danger mr-1">*</span>
                <Input
                  label="Logradouro"
                  type="text"
                  placeholder="Dr. Wasinghton luis"
                  {...logradouro}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <span className="text-danger mr-1">*</span>
                <Input
                  label="Bairro"
                  type="text"
                  placeholder="Vl. Maria"
                  {...bairro}
                />
              </div>
              <div className="form-group col-md-6">
                <span className="text-danger mr-1">*</span>
                <Input
                  label="Cidade"
                  type="text"
                  placeholder="Mogi das Cruzes"
                  {...cidade}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="estado">
                  <span className="text-danger mr-1">*</span>Tipo de logradouro
                </label>
                <select
                  value={tipoDeLogradouro}
                  name="tipoDeLogradouro"
                  id="tipoDeLogradouro"
                  className="form-control"
                  onChange={({ target }) => setTipoDeLogradouro(target.value)}
                >
                  {tiposLogradouro.map((tipo, index) => (
                    <option value={tipo} key={index}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="estado">
                  <span className="text-danger mr-1">*</span>Estado
                </label>
                <select
                  value={estado}
                  name="estado"
                  id="estado"
                  className="form-control"
                  onChange={({ target }) => setEstado(target.value)}
                >
                  {estados.map((e, index) => (
                    <option value={e} key={index}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="pais">
                  <span className="text-danger mr-1">*</span>País
                </label>
                <select
                  value={pais}
                  name="pais"
                  id="pais"
                  className="form-control"
                  onChange={({ target }) => setPais(target.value)}
                >
                  <option value="Brasil">Brasil</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="tipoDeEndereco">
                  <span className="text-danger mr-1">*</span>Tipo de endereço
                </label>
                <select
                  value={tipoDeEndereco}
                  name="tipoDeEndereco"
                  id="tipoDeEndereco"
                  className="form-control"
                  onChange={({ target }) => setTipoDeEndereco(target.value)}
                >
                  {TIPOS_DE_ENDERECO.map((tipo, index) => (
                    <option value={tipo} key={index}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <span className="text-danger mr-1">*</span>
                <Input
                  label="Número"
                  type="text"
                  placeholder="501"
                  {...numero}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="observacao">Observação</label>
                <input
                  id="observacao"
                  name="observacao"
                  placeholder="Não obrigatório"
                  type="text"
                  label="Observação"
                  onChange={({ target }) => setObservacao(target.value)}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <span className="text-danger mr-1">*</span>
              <Textarea
                id="descricao"
                label="Descrição"
                placeholder="Descrição curta para identificação do endereço"
                {...descricao}
              />
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
    </>
  );
};
export default Cadastro;
