import React from "react";
import { Link } from "react-router-dom";

const EnderecoCard = ({ endereco }) => {
  return (
    <div className="col-md-12">
      <div className="row my-3">
        <div className="col-md-8">
          {endereco.logradouro +
            " , " +
            endereco.numero +
            " - " +
            endereco.bairro +
            " - " +
            endereco.cidade +
            " - " +
            endereco.estado +
            " - " +
            endereco.tipoDeEndereco +
            " - " +
            endereco.cep}
        </div>
        <div className="col-md-4">
          <Link to="editar">
            <i className="far fa-edit text-secondary">Editar</i>
          </Link>
          <Link
            to="#"
            className="ml-3 text-secondary"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            <i className="far fa-trash-alt" /> Excluir
          </Link>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Excluir endereço
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">Tem certeza que deseja excluir?</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-secondary">
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
  );
};

export default EnderecoCard;
