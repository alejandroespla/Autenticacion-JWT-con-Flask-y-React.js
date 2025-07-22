import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        let new_user = {
            username: name,
            email: email,
            password: password
        };

        await fetch("https://verbose-doodle-w9x667699rgf97rg-3001.app.github.dev/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(new_user)
        });
    };

    return (
        <div className="container d-flex justify-content-center p-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Register</h3>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-success">Create account</button>
                    </div>
                </form>
                <div className="text-center">
                    <small className="me-1">Already have an account?</small>
                    <Link to={"/"}>
                        <small>Log in here</small>
                    </Link>
                </div>
            </div>
        </div>
    );
};