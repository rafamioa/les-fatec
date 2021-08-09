import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";

export default class Rotas extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route></Route>
      </BrowserRouter>
    );
  }
}
