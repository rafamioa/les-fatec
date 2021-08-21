import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useForm from "../../hooks/useForm";
import { estados } from "../../dados/estados";
import Mensagem from "../Mensagem/Mensagem";
import Input from "../Form/Input";
import Textarea from "../Form/Textarea";

const EnderecoNovo = () => {
  const navegacao = useNavigate();
  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });

  const [estado, setEstado] = useState("SP");

  const cep = useForm("cep");
  const numero = useForm("numero");
  const logradouro = useForm("logradouro");
  const bairro = useForm("bairro");
  const cidade = useForm("cidade");
  const descricao = useForm("descricao");

  function handleClick() {
    if (
      cep.validate() &&
      numero.validate() &&
      logradouro.validate() &&
      bairro.validate() &&
      cidade.validate() &&
      descricao.validate()
    ) {
      navegacao("/conta/enderecos");
    } else {
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Erro ao cadastrar novo endereço",
      });
      console.log("Não enviar");
    }
  }

  return (
    <>
      <Navbar links={[{ link: "Sair", to: "/" }]} />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 ">
            <h2>Cadastrar um novo endereço</h2>
            {mensagem.status && (
              <Mensagem
                mensagem={mensagem.mensagem}
                status={mensagem.status}
                tipo={mensagem.tipo}
              />
            )}
            <div className="dropdown-divider my-3"></div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="cep">
                  <span className="text-danger mr-1">*</span>CEP
                </label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="00000-000"
                  name="cep"
                  id="cep"
                  {...cep}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="numero">
                  <span className="text-danger mr-1">*</span>Número
                </label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="10"
                  name="numero"
                  id="numero"
                  {...numero}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="logradouro">
                  <span className="text-danger mr-1">*</span>Logradouro
                </label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Dr. Washington da Silva"
                  name="logradouro"
                  id="logradouro"
                  {...logradouro}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="numero">
                  <span className="text-danger mr-1">*</span>Bairro
                </label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Vl. Aparecida"
                  name="bairro"
                  id="bairro"
                  {...bairro}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="cidade">
                  <span className="text-danger mr-1">*</span>Cidade
                </label>
                <Input
                  type="text"
                  name="cidade"
                  className="form-control"
                  placeholder="Mogi das Cruzes"
                  id="cidade"
                  {...cidade}
                />
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
              <div className="form-group col-md-3">
                <label htmlFor="pais">
                  <span className="text-danger mr-1">*</span>País
                </label>
                <select name="pais" id="pais" className="form-control">
                  <option value="Brasil">Brasil</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="tipo_de_endereco">
                  <span className="text-danger mr-1">*</span>Tipo de endereço
                </label>
                <select
                  name="tipoDeEndereco"
                  id="tipoDeEndereco"
                  className="form-control"
                >
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="observacoes">Observação</label>
                <Input
                  type="text"
                  className="form-control"
                  name="observacoes"
                  id="observacoes"
                  placeholder="Não obrigatório"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="descrição">
                <span className="text-danger mr-1">*</span>Descrição
              </label>
              <Textarea
                className="form-control"
                name="descricao"
                id="descricao"
                placeholder="Descrição curta para identificação"
                {...descricao}
              />
            </div>
            <button onClick={handleClick} className="btn btn-secondary">
              Salvar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnderecoNovo;
