import React from "react";
import "./App.css";

export default function Main(props) {
      
  return (
    <div className="Main">
      <div className="container main">
        <h1>{props.cityMain}</h1>
        
        <ul>
          <li>{" "}
          DayMax {props.dayMax}°C DayMin {props.dayMin}°C
        </li>
        <li>
          Wind {props.wind}km/h Humidity {props.humidity}%{" "}
        </li>
        </ul>
      </div>
    </div>
  );
}