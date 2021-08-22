import React from "react";
import Sidebar from "./Sidebar";

const Cupons = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2>Meus Cupons</h2>
            <div className="dropdown-divider"></div>
            <p>Aqui você terá acesso a todos os cupons.</p>
            <div className="dropdown-divider"></div>
            <strong>MAIS20</strong> - Ganhe 20% de desconto em uma seleção de
            produtos
          </div>
        </div>
      </div>
    </>
  );
};

export default Cupons;
