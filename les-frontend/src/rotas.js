import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";
import Cadastro from "./componentes/Cadastro/Cadastro";

export default class Rotas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/cadastro"}>
          <Cadastro />
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}
