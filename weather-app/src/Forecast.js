import React from "react";

export default function Forecast (props) {

function day () {
    let date = new Date (props.fdate*1000);
    let day = date.getDay();
    let days= ["Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"];

    return days[day];
}

    return <div className="Forecast">
        <div className="accordion accordion-flush">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <div className="message"><em>Next week forecast</em>
          </div>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> 
        
<div className="row weather-forecast">
    <div className="col header">#</div>
    <div className="col header">Day</div>
    <div className="col header">Night</div>
    <div className="col header">Weather</div>
    <div className="col header">Wind</div>
    <div className="col header">Humidity</div>
    <hr />
    <div className="w-100"></div>
    <div className="col fday">{day()}</div>
    <div className="col winfo">{props.fday}°C</div>
    <div className="col winfo">{props.fnight}°C</div>
    <div className="col winfo">
    <img src={props.ficon} width="50" alt={props.fdesc}/>
    </div>
    <div className="col winfo">{props.fwind}km/h</div>
    <div className="col winfo">{props.fhum}%</div>

</div>

    </div>
    </div>
  </div>
</div>
    </div>
}