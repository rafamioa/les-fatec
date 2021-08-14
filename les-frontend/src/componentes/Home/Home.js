import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {

  return (
    <>
      <Navbar links={[{ link: "entrar", to: "login"} ,{link: "cadastre-se", to: "cadastro" }]} />
      <div className="container mt-5">
        <h1>Página inicial</h1>
      </div>
    </>
  );
};

export default Home;
