import React from "react";
import "./App.css";

export default function Day(props) {
  return (
    <div>
    
    <div className="row" id="perDay">
    <div className="col-sm-3 text-center" id="perDay">
    <span className="dayPart">Morning</span>
    <br />
    <span className="tempDay">{props.morn} °C</span>
    </div>
    <div className="col-sm-3 text-center" id="perDay">
    <span className="dayPart">Afternoon</span>
    <br />
    <span className="tempDay">{props.after} °C</span>
</div>
<div className="col-sm-3 text-center" id="perDay">
<span className="dayPart">Evening</span>
    <br />
    <span className="tempDay text-center">{props.eve} °C</span>
    </div>
    <div className="col-sm-3 text-center" id="perDay">
    <span className="dayPart">Night</span>
    <br />
    <span className="tempDay">{props.night} °C</span>
    </div>
    </div>
    </div>
  );
}