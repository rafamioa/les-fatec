import React from "react";

const Mensagem = ({mensagem, status}) => {
  const classe = status ? "sucess" : "danger";
  return (
    <div className={"alert alert-" + classe} role="alert">
      {mensagem}
    </div>
  );
};

export default Mensagem;
