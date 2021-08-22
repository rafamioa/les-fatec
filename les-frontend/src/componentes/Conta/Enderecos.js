import React from "react";
import EnderecosIndex from "./EnderecosIndex";
import EnderecoEditar from "./EnderecoEditar";
import EnderecoNovo from "./EnderecoNovo";
import { Routes, Route } from "react-router-dom";

const Enderecos = ({ enderecos }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EnderecosIndex enderecos={enderecos} />} />
        <Route path="editar/:id" element={<EnderecoEditar />} />
        <Route path="novo" element={<EnderecoNovo />} />
      </Routes>
    </>
  );
};

export default Enderecos;
