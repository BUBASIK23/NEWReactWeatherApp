import Main from "./Main";
import Weather from "./Weather";
import Day from "./Day";
import CurrentDate from "./CurrentDate";
import Forecast from "./Forecast";
import React, {useState, useEffect } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";


export default function App(props) {
  
  let [city,setCity] =useState(props.defaultCity);
  let [weather,setWeather]=useState ({ ready: false });
  let [morning, setMorning]= useState (null);
  let [afternoon, setAfternoon]=useState (null);
  let [evening, setEvening] = useState (null);
  let [night, setNight] = useState (null);
  
  useEffect(() => {
    defaultSearch()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  function displayForecast(response){
     console.log (response.data.daily);
    setMorning (Math.round(response.data.daily[0].temp.morn));
    setAfternoon (Math.round(response.data.daily[0].temp.day));
    setEvening (Math.round(response.data.daily[0].temp.eve));
    setNight (Math.round(response.data.daily[0].temp.night));
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
 
   if (weather.ready){
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
      <Day morn={morning} after={afternoon} eve={evening} night={night} />
      <br />
      <Forecast />
      </div>
         <footer>
          This weather-app is {" "}<a href="https://github.com/BUBASIK23/NEWReactWeatherApp" target="_blank"  rel="noreferrer" title="GitHub link">open-sourced on GitHub {" "}</a>
           and built by <a href="https://cheerful-taffy-49b22f.netlify.app/" target="_blank" rel="noreferrer">Lubov Belyaeva</a>
         </footer>
    </div>
   
  );}else {return <p> Loading...</p>}
}