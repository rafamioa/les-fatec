import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border shadow-sm bg-light">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          <img src={logo} alt="Logo do site" className="logo" />
        </Link>
        {links &&
        <ul className="navbar-nav ml-auto">

          {links.map((link) =>(
            <li className="nav-item" key={link.link}>
              <Link className="cor-1 nav-link" to={link.to}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
        }
      </div>
    </nav>
  );
};

export default Navbar;
