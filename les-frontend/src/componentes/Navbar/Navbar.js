import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light border shadow-sm bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="Logo do site" className="logo" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="cor-1 nav-link" to={"/cadastro"}>
                Cadastre-se
              </Link>
            </li>
            <li className="nav-item">
              <Link className="cor-1 nav-link" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
