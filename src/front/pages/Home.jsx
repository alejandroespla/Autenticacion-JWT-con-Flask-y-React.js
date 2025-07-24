import React, { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const login = async (email, password) => {
		const resp = await fetch("https://verbose-doodle-w9x667699rgf97rg-3000.app.github.dev//api/user/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password })
		});

		if (!resp.ok) {
			if (resp.status === 404) throw Error("Usuario no encontrado o inexistente");
			if (resp.status === 400) throw Error("Contraseña incorrecta");
			throw Error("No se ha podido logear correctamente");
		}

		const data = await resp.json();
		localStorage.setItem("jwt-token", data.token);
		alert("Logeado con éxito");
		return data;
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		console.log("Iniciando sesión con:", { email, password });

		try {
			const data = await login(email, password);
			console.log("Usuario autenticado:", data);
		} catch (error) {
			alert("Error: " + error);
		}

	};

	const getMyTasks = async () => {
		const token = localStorage.getItem("jwt-token");

		const resp = await fetch("https://your_api.com/protected", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + token
			}
		});

		if (!resp.ok) {
			if (resp.status === 403) {
				throw Error("Missing or invalid token");
			} else {
				throw Error("There was a problem in the login request");
			}
		} else {
			throw Error("Unknown error");
		}

		const data = await resp.json();
		console.log("This is the data you requested", data);
		return data;
	};

	return (
		<div className="container d-flex justify-content-center p-5">
			<div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
				<h3 className="text-center mb-4">Login</h3>
				<form onSubmit={handleLogin}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" className="form-control" id="email" name="email" placeholder="email@example.com" required />
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" className="form-control" id="password" name="password" placeholder="••••••••" required />
					</div>
					<div className="d-grid mb-3">
						<button type="submit" className="btn btn-primary">login</button>
					</div>
				</form>
				<div className="text-center">
					<small className="me-1">Don´t have an account?</small>
					<Link to={"/register"}>
						<small>Register here</small>
					</Link>

				</div>
			</div>
		</div >
	);
};