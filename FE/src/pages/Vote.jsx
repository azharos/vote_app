import React from "react";

export default function Vote() {
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
				<h3 className="text-center fw-light mb-5">Vote</h3>
				<p className="mb-0 text-center">Pilih salah satu kandidat lalu klik tombol Kirim Vote</p>

				<div className="row mt-5">
					<div className="col-md-3">
						<div className="card shadow-lg">
							<div className="card-body">
								<p className="fw-bold fs-2 text-center mb-2">01</p>
								<div
									className="w-full bg-info d-flex justify-content-center align-items-center rounded text-white fs-5 mb-2"
									style={{ height: "130px" }}
								>
									250 x 180
								</div>
								<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow-lg">
							<div className="card-body">
								<p className="fw-bold fs-2 text-center mb-2">01</p>
								<div
									className="w-full bg-info d-flex justify-content-center align-items-center rounded text-white fs-5 mb-2"
									style={{ height: "130px" }}
								>
									250 x 180
								</div>
								<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow-lg">
							<div className="card-body">
								<p className="fw-bold fs-2 text-center mb-2">01</p>
								<div
									className="w-full bg-info d-flex justify-content-center align-items-center rounded text-white fs-5 mb-2"
									style={{ height: "130px" }}
								>
									250 x 180
								</div>
								<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow-lg">
							<div className="card-body">
								<p className="fw-bold fs-2 text-center mb-2">01</p>
								<div
									className="w-full bg-info d-flex justify-content-center align-items-center rounded text-white fs-5 mb-2"
									style={{ height: "130px" }}
								>
									250 x 180
								</div>
								<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center mt-5">
					<button className="btn btn-info text-white">Kirim Vote</button>
				</div>
			</div>
		</div>
	);
}
