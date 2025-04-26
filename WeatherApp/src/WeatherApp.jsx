import { useEffect, useState } from 'react'


function Weather() {
const [weather ,setWeather]=useState(null);

const URL ="https://afrigis.services/weather-10-day-forecast/v1/getHourlyByCoords?latitude=2&longitude=2&station_count=1&location_buffer=1&day_count=1";

const WeatherApp = async() => {
 try{
  const response = await Fetch(URL);
  const data = await response.json();
  setWeather(data);
 }catch(erro){
  console.error(error);
 }
  return result;
};

useEffect(()=>{
  WeatherApp();
},[]);

 if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
    <h1>Weather App</h1>
    <h2>{Weather.name}</h2>
    <p>{Weather.Weather[0].feels_like}</p>
    <p>Temperature: {Weather.main.t}</p>
    <p>Feels Like: {Weather.main.feels_like}</p>
    <p>Humidity: {Weather.main.humidity}</p>
      </div>
    </>
  )
}

export default Weather
