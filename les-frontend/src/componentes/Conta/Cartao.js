import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const Cartao = ({ cartao }) => {
  return (
    <>
    <Routes>
      <Route to="novo" element={() => <h1>novo</h1>} />
    </Routes>
    <div className="col-md-12">
      <div className="row my-3">
        <div className="col-md-8 d-flex flex-column ">
          {cartao.nomeDoCartao +
            " , " +
            cartao.numeroDoCartao +
            " - " +
            cartao.codigoDoCartao +
            " - " +
            cartao.bandeiraDoCartao}

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="preferencial"
                id="preferencial"
                value="true"
              />
            <label htmlFor="preferencial" className="my-auto">preferencial</label>
          </div>
        </div>
        <div className="col-md-4">
          <Link to="editar">
            <i className="far fa-edit text-secondary">Editar</i>
          </Link>
          <Link to="#"
            className="ml-3 text-secondary"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <i className="far fa-trash-alt" /> Excluir
          </Link>

          <div
            class="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    Excluir cartão
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">Tem certeza que deseja excluir?</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" class="btn btn-secondary">
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-divider"></div>
    </div>
    </>
  );
};

export default Cartao;
