import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import robots from './data/robots.json';
import RobotTable from './components/RobotTable';
import RobotDetail from './components/RobotDetail';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import messages from './locales';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [users, setUsers] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [lang, setLang] = useState('es'); // 'es' por defecto

  const handleRegister = (username, password) => {
    setUsers([...users, { username, password }]);
    setShowRegister(false);
  };

  const handleLogin = (username, password) => {
    const userExists = users.some(
      (user) => user.username === username && user.password === password
    );
    return userExists;
  };

  if (!isAuthenticated) {
    return showRegister ? (
      <RegisterForm
        onRegister={handleRegister}
        onCancel={() => setShowRegister(false)}
      />
    ) : (
      <LoginForm
        onLoginSuccess={() => setIsAuthenticated(true)}
        onValidate={handleLogin}
        onShowRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="container mt-4">
      {/* Selector de idioma */}
      <div className="text-end mb-3">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="form-select w-auto d-inline"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Encabezado con imagen y título traducido */}
      <div className="text-center mb-3">
        <img
          src={require('./assets/robots-header.png')}
          alt="Encabezado robots"
          className="img-fluid mb-2"
          style={{ maxHeight: '180px' }}
        />
        <h2>{messages[lang].title}</h2>
      </div>

      {/* Tabla de robots */}
      <RobotTable
        robots={robots}
        onRobotSelect={setSelectedRobot}
        labels={messages[lang].table}
      />

      {/* Detalle de robot */}
      {selectedRobot && (
        <RobotDetail robot={selectedRobot} labels={messages[lang].detail} lang={lang} />

      )}

      <div className="text-center mt-3 mb-2">
        Contact us: +57 3102105253 – info@robot-lovers.com – @robot-lovers
      </div>
    </div>
  );
}

export default App;
