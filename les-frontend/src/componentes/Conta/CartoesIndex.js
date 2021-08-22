import React from "react";
import Cartao from "./Cartao";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const CartoesIndex = ({ cartoes }) => {
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-3">
						<Sidebar />
					</div>
					<Outlet />
					<div className="col-md-9">
						<h2>Meus Cartões</h2>
						<div className="dropdown-divider"></div>
						<div className="row">
							{cartoes.map((cartao) => (
								<Cartao
									cartao={cartao}
									key={cartao.codigoDoCartao}
								/>
							))}
						</div>
						<Link
							to="novo"
							className="btn btn-light border border-dark mt-5"
						>
							Adicionar novo cartão
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartoesIndex;
