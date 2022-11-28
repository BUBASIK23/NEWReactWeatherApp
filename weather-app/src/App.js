import Main from "./Main";
import Weather from "./Weather";
import Day from "./Day";
import React, {useState} from "react";
import axios from "axios";
import "./App.css";
import Forecast from "./Forecast";

export default function App() {
  let [city,setCity] =useState(``)
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
  let [icon, setIcon] = useState (null)

  function displayForecast(response){
    console.log (response.data.daily);
    setMorning (Math.round(response.data.daily[0].temp.morn));
    setAfternoon (Math.round(response.data.daily[0].temp.day));
    setEvening (Math.round(response.data.daily[0].temp.eve));
    setNight (Math.round(response.data.daily[0].temp.night))
  }


  function getForecast (coordinates) {
    console.log (coordinates);
    let apiKey = "3403a0d9be1275191d4d17e1391e7b13";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    console.log (apiUrl);
    axios.get(apiUrl).then(displayForecast);
  }  

function showTemp (response) {
setTemp (Math.round(response.data.main.temp));
setDayMax (Math.round (response.data.main.temp_max));
setDayMin (Math.round (response.data.main.temp_min));
setHumidity(Math.round(response.data.main.humidity));
setWind(Math.round(response.data.wind.speed));
setDescription(response.data.weather[0].description);
setIcon (`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
//setCity (response.data.name);
//setMorning (Math.round (response.data.))
//setAfternoon
//setEvening
//setNight
console.log(response.data);
getForecast (response.data.coord)
}

function defaultSearch (event) {
  event.preventDefault();
  let apiKey = "3403a0d9be1275191d4d17e1391e7b13"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  console.log (apiUrl);
  axios.get(apiUrl).then(showTemp);
 
}

function updateCity (event) {
  console.log (event.target.value);
  setCity(event.target.value);
    
}

  
   
  return (
    <div className="body">
      <span>
    <form className="Search" onSubmit={defaultSearch}>
      <input
        type="search"
        placeholder="Type other place"
        className="form-control" onChange={updateCity}
      />
      <input type="submit" value="Search" className="btn" />
          </form>
  </span>
      <table>
        <tr>
          <th className="mainBody">
            <Main dayMax={dayMax} dayMin={dayMin} wind={wind} humidity={humidity}/>
          </th>
          <th className="weatherBody">
            <Weather value={temp} cityMain={city} icon={icon} desc={description}/>
          </th>
        </tr>
      </table>
      <hr />
      <Day morn={morning} after={afternoon} eve={evening} night={night} />
      <br />
      <Forecast />
    </div>
   
  );
}
