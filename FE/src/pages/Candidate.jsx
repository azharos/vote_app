import React from "react";

export default function Candidate() {
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
								Candidate
							</a>
							<a className="nav-link text-white" href="#">
								Users
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
				<h3 className="fw-light mb-5">Candidates</h3>
				<div className="row">
					<div className="col-md-4">
						<div className="card shadow-lg">
							<div className="card-header fs-5 fw-semibold">Tambah Candidate</div>
							<div className="card-body">
								<form>
									<div className="mb-3">
										<label for="exampleInputEmail1" className="form-label">
											Name
										</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
										/>
									</div>
									<div className="mb-3">
										<label for="exampleInputEmail1" className="form-label">
											Thumbnail
										</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
										/>
									</div>
									<div className="mb-3">
										<label for="exampleInputEmail1" className="form-label">
											No Urut
										</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
										/>
									</div>
									<button type="submit" className="btn btn-info">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card shadow-lg">
							<div className="card-header fs-5 fw-semibold">Tambah Candidate</div>
							<div className="card-body d-flex flex-column gap-3">
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-between">
											<div className="d-flex align-items-center gap-4">
												<p className="mb-0 fw-bold fs-1">01</p>
												<div className="px-4 py-3 bg-info text-white rounded">250 x 180</div>
												<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
											</div>
											<div className="d-flex flex-column gap-2 ">
												<button type="button" className="btn btn-info text-white">
													Edit
												</button>
												<button type="button" className="btn btn-info text-white">
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-between">
											<div className="d-flex align-items-center gap-4">
												<p className="mb-0 fw-bold fs-1">01</p>
												<div className="px-4 py-3 bg-info text-white rounded">250 x 180</div>
												<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
											</div>
											<div className="d-flex flex-column gap-2 ">
												<button type="button" className="btn btn-info text-white">
													Edit
												</button>
												<button type="button" className="btn btn-info text-white">
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-between">
											<div className="d-flex align-items-center gap-4">
												<p className="mb-0 fw-bold fs-1">01</p>
												<div className="px-4 py-3 bg-info text-white rounded">250 x 180</div>
												<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
											</div>
											<div className="d-flex flex-column gap-2 ">
												<button type="button" className="btn btn-info text-white">
													Edit
												</button>
												<button type="button" className="btn btn-info text-white">
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="card">
									<div className="card-body">
										<div className="d-flex justify-content-between">
											<div className="d-flex align-items-center gap-4">
												<p className="mb-0 fw-bold fs-1">01</p>
												<div className="px-4 py-3 bg-info text-white rounded">250 x 180</div>
												<p className="mb-0 fs-5">Ahmad Subarjo & Romi Amirudin</p>
											</div>
											<div className="d-flex flex-column gap-2 ">
												<button type="button" className="btn btn-info text-white">
													Edit
												</button>
												<button type="button" className="btn btn-info text-white">
													Delete
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
