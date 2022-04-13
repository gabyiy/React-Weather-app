import React, { useState, useEffect } from "react";
import "./StaticCityAndSelectedCity.css"

const StaticCity = (props) => {
  var img = "";

  var today = new Date();
  var hh=String(today.getHours()).padStart(2, '0')
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

  const [weather, setWheather] = useState({});
  const [icon,setIcon]=useState("")
  const[clouds,setClouds]=useState("")
  const [humidity,setHumidity]=useState("")
  const [wind,setWind]=useState("")
  const [temp,setTemp]=useState("")
  const [tempMax,setTempMax]=useState("")
  const [minTemp,setMinTemp]=useState("")
  const [feelsLike,setFeelsLike]=useState("")
  const [city,setCity]=useState("")

  const [imageTime, setImageTime] = useState("");
  const [dispach, setDispach] = useState(false);

  const api = {
    key: "dbafe88a6b45337add3d8fb21f6cea2e",
    url: "https://api.openweathermap.org/data/2.5/",
  };


const imaine= `http://openweathermap.org/img/wn/${icon}.png`


  useEffect(() => {
    const weatherInit = () => {
      const success = (position) => {
        cityHandler(position.coords.latitude, position.coords.longitude);
      };

      const error = () => {
        alert("Unable to retrieve location.");
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        alert(
          "Your browser does not support location tracking, or permission is denied."
        );
      }
      setDispach(true);
    };
    weatherInit();
    const cityHandler = async (lat, lon) => {
      const response = await fetch(
        `${api.url}weather?&lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
      );
      const data = await response.json();

      setWheather(data);

      setImageTime(data.weather[0].main)
      setClouds(data.clouds.all)
      setHumidity(data.main.humidity)
      setWind(Math.round(data.wind.speed))
      setTempMax(Math.round(data.main.temp_max))
      setMinTemp(Math.round(data.main.temp_min))
      setFeelsLike(Math.round(data.main.feels_like))
      setTemp(Math.round(data.main.temp))
      setCity(data.name)
      setIcon(data.weather[0].icon)
    
    };
    if (dispach) {
      cityHandler();
    }
  
  }, []);


if (imageTime === "Clouds"&& hh>=8 && hh<=21  ) {
  props.getImg("url(/images/clouds.avif)")

}else if  (imageTime === "Clouds") {
  props.getImg("url(/images/nigthClouds.jpg)")

}else if (imageTime === "Mist" && hh>=8 && hh<=21) {
  props.getImg("url(/images/mist.webp)")
}else if  (imageTime === "Mist") {
  props.getImg("url(/images/nigthMist.jpg)")

}
 else if (imageTime === "Snow" && hh>=8 && hh<=21) {
  props.getImg("url(/images/snow.jpg)")

}else if (imageTime === "Snow") {
  props.getImg("url(/images/nigthSnow.jpg)")

}
 else if (imageTime === "Rain" && hh>=8 && hh<=21 ) {
  props.getImg("url(/images/rain.jpg)")
} else if (imageTime === "Rain") {
  props.getImg("url(/images/rainy-night.jpg)")
}
 else if (imageTime==="Clear"  && hh>=8 && hh<=21){

  props.getImg("url(/images/clearSkyDay.jpg)")

} else if (imageTime==="Clear"){

props.getImg("url(/images/clearSkyNigth.jpg)")

} 

  return (
    <div className="main-page" >
      <div className="city">
     <div className="temp">{temp}°</div>
    
     <div className="date-city">
       <h1  className="cityName"> {city}</h1>
     <div className="date">{today}</div>
     </div> 
     <div className="img-sky">
       <div>
        <img src={imaine} />
        </div>
       <div className="sky">
{imageTime}
       </div>
     
     </div>
    
      </div>
      <div className="blurDiv">
        <div className="center">
    <h4>Weather details</h4>
    <hr></hr>
    </div>
    <div className="flex">
      <h4>Temperature</h4>
      <h4>{temp}°</h4>
    </div>
    <div className="flex">
      <h4>Max temp</h4>
      <h4>{tempMax}°</h4>
    </div>
    <div className="flex">
      <h4>Min temp</h4>
      <h4>{minTemp}°</h4>
    </div>
    <div className="flex">
      <h4>Feels like</h4>
      <h4>{feelsLike}°</h4>
    </div>
    <div className="flex">
      <h4>Clouds</h4>
      <h4>{clouds}%</h4>
    </div>
    <div className="flex">
      <h4>Humidity</h4>
      <h4>{humidity}%</h4>
    </div>
    <div className="flex">
      <h4>Wind</h4>
      <h4>{wind}km/h</h4>
  
    </div>
      </div>
    </div>
  );
};

export default StaticCity;
