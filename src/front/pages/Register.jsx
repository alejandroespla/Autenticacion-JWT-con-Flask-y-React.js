
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container d-flex justify-content-center p-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Registro</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm" className="form-label">Confirmar contraseña</label>
                        <input type="password" className="form-control" id="confirm" required />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-success">Crear cuenta</button>
                    </div>
                </form>
                <div className="text-center">
                    <small>¿Ya tienes cuenta?</small>
                        <Link to={"/"}>
                            <small>Regístrate aquí</small>
                        </Link>
                    
                </div>
            </div>
        </div>
    );
};