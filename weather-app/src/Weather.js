import React from "react";
import "./App.css";

export default function Weather(props) {
  return (
    <div className="temp">
      
      <span className="value">{props.value}°C</span>

      <img className="img-fluid" src={props.icon} alt={props.desc}/>
    </div>
    
  );
}