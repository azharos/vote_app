import React from "react";

export default function Login() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-info">
				<div class="container">
					<a class="navbar-brand text-white fw-bold" href="#">
						Vote App
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div className="ms-auto">
						<button type="button" className="btn btn-outline-light">
							Login
						</button>
					</div>
				</div>
			</nav>
			<div className="py-5 container">
				<div className="d-flex justify-content-center w-full py-2 px-3">
					<div className="" style={{ width: "50%" }}>
						<h3 className="fw-light text-center mb-4">Voters Login</h3>

						<form>
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">
									Email
								</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">
									Password
								</label>
								<input type="password" class="form-control" id="exampleInputPassword1" />
							</div>
							<button type="submit" class="btn btn-info w-100">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
