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
        <Link className="link" to="pedidos" >Meus pedidos</Link>
      </li>
      <li className="list-group-item">
        <Link to="dados" >Meus dados</Link>
      </li>
      <li className="list-group-item">
        <Link to="enderecos" >Meus endereços</Link>
      </li>
      <li className="list-group-item">
        <Link to="cartoes" >Meus cartões</Link>
      </li>
      <li className="list-group-item">
        <Link to="cupons" >Meus cupons</Link>
      </li>
      <li className="list-group-item">
        <Link to="senha" >Alterar a senha</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
