
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container d-flex justify-content-center p-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Register</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Name</label>
                        <input type="username" className="form-control" id="username" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
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