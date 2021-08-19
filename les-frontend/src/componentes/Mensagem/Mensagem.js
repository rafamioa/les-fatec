import React from "react";

const Mensagem = ({mensagem, status, tipo}) => {
  const classe = tipo === "sucesso" ? "success" : "danger";
  return (
    <div className={"alert alert-" + classe} role="alert">
      {mensagem}
    </div>
  );
};

export default Mensagem;
