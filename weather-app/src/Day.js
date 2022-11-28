import React from "react";
import "./App.css";

export default function Day(props) {
  return (
    <table className="dayTemp">
        <thead>
      <tr>
        <th>Morning</th>
        <th>Afternoon</th>
        <th>Evening</th>
        <th>Night</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{props.morn}°C</td>
        <td>{props.after}°C</td>
        <td>{props.eve}°C</td>
        <td>{props.night}°C</td>
      </tr>
      </tbody>
    </table>
  );
}
