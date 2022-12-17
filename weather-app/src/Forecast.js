import React from "react";

export default function Forecast () {
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
    <div className="col">#</div>
    <div className="col">Day</div>
    <div className="col">Night</div>
    <div className="col">Weather</div>
    <div className="col">Wind</div>
    <div className="col">Humidity</div>
    <hr />
    <div className="w-100"></div>
    <div className="col">Sun</div>
    <div className="col">-3°C</div>
    <div className="col">-5°C</div>
    <div className="col">icon</div>
    <div className="col">5km/h</div>
    <div className="col">50%</div>

</div>

    </div>
    </div>
  </div>
</div>
    </div>
}