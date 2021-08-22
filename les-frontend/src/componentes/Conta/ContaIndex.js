import React from "react";
import Sidebar from "./Sidebar";

const ContaIndex = () => {
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-3">
						<Sidebar />
					</div>
					<div className="col-md-9">
						<h2>Minha Conta</h2>
						<div className="dropdown-divider"></div>
						<p>
							Neste espaço você pode alterar seus dados cadastrais
							e acompanhar seus pedidos.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContaIndex;
