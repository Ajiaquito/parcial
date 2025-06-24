import React, { useState } from 'react';
import headerImg from '../assets/robots-header.png';

const RegisterForm = ({ onRegister, onCancel }) => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && clave) {
      onRegister(usuario, clave);
    }
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <img src={headerImg} alt="Robots" className="img-fluid mb-3" />
        <h2 className="robot-title">Adopta un Robot con Robot Lovers!</h2>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto text-center" style={{ maxWidth: '400px' }}>
        <h4>Registro de usuario</h4>
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
          <button type="submit" className="btn btn-success">Registrarse</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>

      <div className="footer text-center mt-4 mb-2">
        Contact us: +57 3102105253 – info@robot-lovers.com – @robot-lovers
      </div>
    </div>
  );
};

export default RegisterForm;
