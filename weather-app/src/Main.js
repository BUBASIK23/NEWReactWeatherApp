import React from "react";
import "./App.css";

export default function Main(props) {
  
  return (
    <div className="Main">
      <div className="Container">
        <h1>{props.cityMain}</h1>
        
        <p>
          {" "}
          DayMax {props.dayMax}°C DayMin {props.dayMin}°C
        </p>
        <p>
          Wind {props.wind}km/h Humidity {props.humidity}%{" "}
        </p>
      </div>
    </div>
  );
}
