import React from "react";
import "../../styles/menu.css";

///create your first component
const Menu = ({ menu }) => {

	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
			<div className="container-fluid">
				<a className="navbar-brand text-white bg-dark" href="#">{menu[0]}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active text-white bg-dark" aria-current="page" href="#">{menu[1]}</a>
						<a className="nav-link text-white bg-dark" href="#">{menu[2]}</a>
						<a className="nav-link text-white bg-dark" href="#">{menu[3]}</a>
					</div>
				</div>
			</div>
		</nav>
	)
};

export default Menu;
