import React from "react";

export default function ForecastInfo (props) {
    function day () {
        let date = new Date (props.data.dt*1000);
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
    return (
        <div className="row justify-content-md-center forecastInfo">
           
    <div className="col-2 fday">{day()}</div>
    <div className="col-2 winfo">{Math.round(props.data.temp.day)}°C</div>
    <div className="col-2 winfo">{Math.round(props.data.temp.night)}°C</div>
    <div className="col-2 winfo">
    <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} width="50px" alt={props.data.weather[0].description}/>
    </div>
    <div className="col-2 winfo">{Math.round(props.data.wind_speed)}km/h</div>
    <div className="col-2 winfo">{Math.round(props.data.humidity)}%</div>
        </div>
    )
}