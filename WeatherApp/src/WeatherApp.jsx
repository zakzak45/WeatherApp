import { useEffect, useState } from 'react'


function Weather() {
const [weather ,setWeather]=useState(null);

const URL ="";

const WeatherApp = async() => {
 try{
  const response = await Fetch();
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
    
    </>
  )
}

export default Weather
