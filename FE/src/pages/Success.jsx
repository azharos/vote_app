import React from "react";

export default function Success() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-info">
				<div className="container">
					<a className="navbar-brand text-white fw-bold" href="#">
						Vote App
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link text-white" aria-current="page" href="#">
								Vote
							</a>
						</div>
					</div>
					<div className="ms-auto">
						<button type="button" className="btn btn-outline-light">
							Logout
						</button>
					</div>
				</div>
			</nav>

			<div className="container py-5">
				<p className="fs-3 fw-light text-center">Vote Success</p>
				<p className="fw-light text-center mb-0">Vote anda telah tersimpan</p>
				<p className="fw-light text-center mb-0">Anda telah selesai melakukan Voting</p>
			</div>
		</div>
	);
}
