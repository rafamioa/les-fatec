import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

const Sidebar = () => {

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <p>João da Silva</p>
      </li>
      <li className="list-group-item">
        <Link to="/conta/pedidos" >Meus pedidos</Link>
      </li>
      <li className="list-group-item">
        <Link to="/conta/dados" >Meus dados</Link>
      </li>
      <li className="list-group-item">
        <Link to="/conta/enderecos" >Meus endereços</Link>
      </li>
      <li className="list-group-item">
        <Link to="/conta/cartoes" >Meus cartões</Link>
      </li>
      <li className="list-group-item">
        <Link to="/conta/cupons" >Meus cupons</Link>
      </li>
      <li className="list-group-item">
        <Link to="/conta/senha" >Alterar a senha</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
