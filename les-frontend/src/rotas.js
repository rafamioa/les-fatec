import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import Login from "./componentes/Login/Login";

export default class Rotas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path={"/login"}>
          <Login />
        </Route>
        <Footer />
      </BrowserRouter>
    );
  }
}
