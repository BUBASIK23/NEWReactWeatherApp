import React from "react";
import "./App.css";

export default function Weather(props) {
  return (
    <div className="temp">
      <span className="value">{props.value}°C</span>

      <img src={props.icon} width="150" alt={props.desc}/>
    </div>
  );
}
