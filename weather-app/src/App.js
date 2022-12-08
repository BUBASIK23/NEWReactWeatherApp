import Main from "./Main";
import Weather from "./Weather";
import Day from "./Day";
import CurrentDate from "./CurrentDate";
import React, {useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";


export default function App() {
  const [ready, setReady] = useState(false);
  let [city,setCity] =useState(`Kyiv`);
  let [temp, setTemp] = useState (null);
  let [dayMax, setDayMax] = useState (null);
  let [dayMin, setDayMin] = useState (null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [morning, setMorning]= useState (null);
  let [afternoon, setAfternoon]=useState (null);
  let [evening, setEvening] = useState (null);
  let [night, setNight] = useState (null);
  let [icon, setIcon] = useState (null);
  let [today, setToday] = useState ()
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
  setReady(true);
setTemp (Math.round(response.data.main.temp));
setDayMax (Math.round (response.data.main.temp_max));
setDayMin (Math.round (response.data.main.temp_min));
setHumidity(Math.round(response.data.main.humidity));
setWind(Math.round(response.data.wind.speed));
setDescription(response.data.weather[0].description);
setToday (new Date(response.data.dt*1000));
setIcon (`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
console.log(response.data);
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
 
   if (ready){
  return (
    <div className="body">
            <div className="container canva">
      <CurrentDate currentDate={today}/>
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
        <div class="col-5">
        <Main dayMax={dayMax} dayMin={dayMin} wind={wind} humidity={humidity} cityMain={city} />
        </div>
        <div className="col-7 text-center align-middle">
        <Weather value={temp} cityMain={city} icon={icon} desc={description}/>
        </div>
        </div>
      </div>
      <hr />
      <Day morn={morning} after={afternoon} eve={evening} night={night} />
      
      </div>
         <footer>
          This weather-app is {" "}<a href="https://github.com/BUBASIK23/NEWReactWeatherApp" target="_blank"  rel="noreferrer" title="GitHub link">open-sourced on GitHub {" "}</a>
           and built by <a href="https://cheerful-taffy-49b22f.netlify.app/" target="_blank" rel="noreferrer">Lubov Belyaeva</a>
         </footer>
    </div>
   
  );}else {return <p> Loading...</p>}
}