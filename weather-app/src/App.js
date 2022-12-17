import Main from "./Main";
import Weather from "./Weather";
import Day from "./Day";
import CurrentDate from "./CurrentDate";
import ForecastInfo from "./ForecastInfo";
import React, {useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";


export default function App(props) {
  
  let [city,setCity] =useState(props.defaultCity);
  let [weather,setWeather]=useState ({ ready: false });
  let [perDay, setPerDay] =useState ({});
  let [forecast, setForecast] = useState (null)
  let [load, setLoad] = useState (false);
   
  useEffect(() => {
    defaultSearch()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  function displayForecast(response){
    setPerDay ({
      morn: Math.round(response.data.daily[0].temp.morn),
      after: Math.round(response.data.daily[0].temp.day),
      eve: Math.round(response.data.daily[0].temp.eve),
      night: Math.round(response.data.daily[0].temp.night)});
      setLoad (true);
    setForecast (response.data.daily);
    
     
      }


  function getForecast (coordinates) {
    console.log (coordinates);
    let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    console.log (apiUrl);
    axios.get(apiUrl).then(displayForecast);
  }  

  function showTemp (response) {
    setWeather({
      ready: true,
      temp: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      today: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: Math.round(response.data.wind.speed),
      dayMax: Math.round (response.data.main.temp_max),
      dayMin: Math.round (response.data.main.temp_min),
      city: response.data.name,
    });
    getForecast (response.data.coord);
  }



function defaultSearch () {
  let apiKey = "3403a0d9be1275191d4d17e1391e7b13"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  console.log (apiUrl);
  axios.get(apiUrl).then(showTemp);
}

function changePlace (event) {
  event.preventDefault();
  defaultSearch()
}


function updateCity (event) {
    setCity(event.target.value);
  }
 
   if (weather.ready && load){
  return (
    <div className="body">
            <div className="container canva">
      <CurrentDate currentDate={weather.today}/>
      <span>
    <form className="Search" onSubmit={changePlace}>
      <input
        type="search"
        placeholder="Type other place..."
        className="form-control" onChange={updateCity}
      />
      <input type="submit" value="Search" className="btn" />
          </form>
  </span>
            <div className="container">
        <div className="row">
        <div className="col-5">
        <Main dayMax={weather.dayMax} dayMin={weather.dayMin} wind={weather.wind} humidity={weather.humidity} cityMain={weather.city} />
        </div>
        <div className="col-7 text-center align-middle">
        <Weather value={weather.temp} icon={weather.icon} desc={weather.description}/>
        </div>
        </div>
      </div>
      <hr />
      <Day morn={perDay.morn} after={perDay.after} eve={perDay.eve} night={perDay.night} />
      <br />
      <div className="Forecast">
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
    {forecast.map (function (dailyforecast, index){
        return (<ForecastInfo data={forecast[0]}/>)
      })}
    

</div>

    </div>
    </div>
  </div>
</div>
    </div>
             
      </div>
         <footer>
          This weather-app is {" "}<a href="https://github.com/BUBASIK23/NEWReactWeatherApp" target="_blank"  rel="noreferrer" title="GitHub link">open-sourced on GitHub {" "}</a>
           and built by <a href="https://cheerful-taffy-49b22f.netlify.app/" target="_blank" rel="noreferrer">Lubov Belyaeva</a>
         </footer>
    </div>
   
  );}else {return <p> Loading...</p>}
}