import React from "react";
import CartoesIndex from "./CartoesIndex";
import CartaoNovo from "./CartaoNovo";
import CartaoEditar from "./CartaoEditar";
import { Routes, Route } from "react-router-dom";

const Cartoes = ({ cartoes }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CartoesIndex cartoes={cartoes} />} />
        <Route path="editar/:id" element={<CartaoEditar />} />
        <Route path="novo" element={<CartaoNovo />} />
      </Routes>
    </>
  );
};

export default Cartoes;
