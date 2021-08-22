import React from "react";
import Sidebar from "./Sidebar";

const Pedidos = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h2>Meus pedidos</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Nº do pedido</th>
                  <th>Data</th>
                  <th>Qtd.</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Entregue</td>
                  <td>54158789</td>
                  <td>01/01/2021</td>
                  <td>4</td>
                  <td>R$ 850</td>
                </tr>
                <tr>
                  <td>Entregue</td>
                  <td>7553422</td>
                  <td>01/02/2021</td>
                  <td>1</td>
                  <td>R$ 1200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pedidos;
