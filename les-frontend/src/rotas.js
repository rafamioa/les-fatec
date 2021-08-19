import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";
import Cadastro from "./componentes/Cadastro/Cadastro";
import Conta from "./componentes/Conta/Conta";

import CartaoNovo from "./componentes/Conta/CartaoNovo";
import CartaoEditar from "./componentes/Conta/CartaoEditar";
import EnderecoNovo from "./componentes/Conta/EnderecoNovo";
import EnderecoEditar from "./componentes/Conta/EnderecoEditar";
import Home from "./componentes/Home/Home";

export default class Rotas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="conta/*" element={<Conta />} />
          <Route path="conta/cartoes/novo" element={<CartaoNovo />} />
          <Route path="conta/cartoes/editar" element={<CartaoEditar />} />
          <Route path="conta/enderecos/novo" element={<EnderecoNovo />} />
          <Route path="conta/enderecos/editar" element={<EnderecoEditar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
