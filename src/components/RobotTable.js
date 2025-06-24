import React from 'react';

const RobotTable = ({ robots, onRobotSelect, labels }) => (
  <table className="table table-bordered text-center">
    <thead className="table-dark">
      <tr>
        <th>{labels.id}</th>
        <th>{labels.name}</th>
        <th>{labels.model}</th>
        <th>{labels.manufacturer}</th>
      </tr>
    </thead>
    <tbody>
      {robots.map((robot) => (
        <tr
          key={robot.id}
          onClick={() => onRobotSelect(robot)}
          style={{ cursor: 'pointer' }}
        >
          <td>{robot.id}</td>
          <td>{robot.nombre}</td>
          <td>{robot.modelo}</td>
          <td>{robot.empresaFabricante}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RobotTable;
