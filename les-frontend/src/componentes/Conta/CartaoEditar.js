import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useForm from "../../hooks/useForm";
import Mensagem from "../Mensagem/Mensagem";
import Input from "../Form/Input";

const CartaoEditar = () => {
  const navegacao = useNavigate();
  const [mensagem, setMensagem] = useState({
    tipo: "",
    status: false,
    mensagem: "",
  });

  const nomeDoCartao = useForm("nomeDoCartao");
  const numeroDoCartao = useForm("numeroDoCartao");
  const codigoDoCartao = useForm("codigoDoCartao");

  function handleClick() {
    if (
      nomeDoCartao.validate() &&
      numeroDoCartao.validate() &&
      codigoDoCartao.validate()
    ) {
      navegacao("/conta/cartoes");
    } else {
      setMensagem({
        status: true,
        tipo: "erro",
        mensagem: "Erro ao editar cartão selecionado",
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
            <h2>Editar cartão</h2>
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
                <label forHtml="nomeDoCartao">
                  <span className="text-danger mr-1">*</span>Nome impresso no
                  cartão
                </label>
                <Input
                  type="text"
                  name="nomeDoCartao"
                  id="nomeDoCartao"
                  className="form-control"
                  {...nomeDoCartao}
                />
              </div>
              <div className="form-group col-md-6">
                <label forHtml="numeroDoCartao">
                  <span className="text-danger mr-1">*</span>Número do cartão
                </label>
                <Input
                  type="text"
                  name="numeroDoCartao"
                  id="numeroDoCartao"
                  className="form-control"
                  {...numeroDoCartao}
                />
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-md-6">
                <label forHtml="codigoDoCartao">
                  <span className="text-danger mr-1">*</span>Código de segurança
                </label>
                <Input
                  type="text"
                  name="codigoDoCartao"
                  id="codigoDoCartao"
                  className="form-control"
                  {...codigoDoCartao}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="bandeiraDoCartao">
                  <span className="text-danger mr-1">*</span>Bandeira do cartão
                </label>
                <select name="bandeiraDoCartao" className="form-control">
                  <option value="mastercard">Mastercard</option>
                  <option value="visa">Visa</option>
                </select>
              </div>
            </div>
            <button onClick={handleClick} className="btn btn-secondary">
              Salvar as alterações
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartaoEditar;
