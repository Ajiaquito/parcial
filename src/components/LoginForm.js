import React, { useState } from 'react';
import headerImg from '../assets/robots-header.png';

const LoginForm = ({ onLoginSuccess, onValidate, onShowRegister }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onValidate(usuario, clave)) {
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <img src={headerImg} alt="Robots" className="img-fluid mb-3" />
        <h2 className="robot-title">Adopta un Robot con Robot Lovers!</h2>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto text-center" style={{ maxWidth: '400px' }}>
        <h4>Inicio de sesión</h4>
        <div className="mb-3 text-start">
          <label className="form-label">Nombre de usuario</label>
          <input
            type="text"
            className="form-control"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Ingresar</button>
          <button type="button" className="btn btn-danger" onClick={() => { setUsuario(''); setClave(''); setError(false); }}>Cancelar</button>
        </div>

        {error && (
          <div className="text-danger mt-3">
            Error de autenticación. Revise sus credenciales
          </div>
        )}

        <div className="mt-3">
          ¿No tienes cuenta?{' '}
          <button className="btn btn-link p-0" type="button" onClick={onShowRegister}>
            Regístrate aquí
          </button>
        </div>
      </form>

      <div className="footer text-center mt-4 mb-2">
        Contact us: +57 3102105253 – info@robot-lovers.com – @robot-lovers
      </div>
    </div>
  );
};

export default LoginForm;
