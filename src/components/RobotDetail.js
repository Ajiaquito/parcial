import React from 'react';

const RobotDetail = ({ robot, labels, lang }) => {
  return (
    <div className="container mt-5 border-top pt-4">
      <div className="text-center mb-3">
        <h4>{robot.nombre}</h4>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 text-center mb-3 mb-md-0">
          <img
            src={robot.imagen}
            alt={robot.nombre}
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled">
            <li className="mb-2">
              ➔ <strong>{labels.year}:</strong> {robot.añoFabricacion}
            </li>
            <li className="mb-2">
              ➔ <strong>{labels.cpu}:</strong> {robot.capacidadProcesamiento}
            </li>
            <li className="mb-2">
              ➔ <strong>{labels.humor}:</strong> {robot.humor[lang]}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
