import React from "react";

import SunnyInterval from "./images/Sunny-Interval.png";
import "./App.css";

export default function Weather(props) {
  return (
    <div className="temp">
      <span className="value">{props.value}°C</span>

      <img src={SunnyInterval} width="150" alt="description"/>
    </div>
  );
}
