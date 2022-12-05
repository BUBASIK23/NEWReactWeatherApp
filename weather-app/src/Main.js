import React from "react";
import "./App.css";

export default function Main(props) {
      
  return (
    <div className="Main">
      <div className="container main">
        <h1>{props.cityMain}</h1>
        
        <div>
        DayMax {props.dayMax}°C DayMin {props.dayMin}°C
        </div>
        <div>
        Wind {props.wind}km/h Humidity {props.humidity}%{" "}
        </div>
  
      </div>
    </div>
  );
}