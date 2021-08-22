import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Endereco from "./Endereco";

const EnderecosIndex = ({ enderecos }) => {
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-3">
						<Sidebar />
					</div>
					<Outlet />
					<div className="col-md-9">
						<h2>Meus Endereços</h2>
						<div className="dropdown-divider"></div>

						{enderecos.map((endereco) => (
							<Endereco
								endereco={endereco}
								key={endereco.numero}
							/>
						))}
						<Link
							to="novo"
							className="btn btn-light border border-dark mt-5"
						>
							Adicionar novo endereço
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default EnderecosIndex;
