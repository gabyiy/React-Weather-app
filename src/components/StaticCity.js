import React, { useState, useEffect } from "react";
import "./StatiCity.css"

const StaticCity = (props) => {
  var img = "";
  var   myStyleStatic={  backgroundImage: 
    "url(/images/withCloudsDay.jpg)",
        height:'100vh',
       
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }


  const [weather, setWheather] = useState({});

  const [imageTime, setImageTime] = useState("");
  const [dispach, setDispach] = useState(false);

  const api = {
    key: "dbafe88a6b45337add3d8fb21f6cea2e",
    url: "https://api.openweathermap.org/data/2.5/",
  };





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
    };
    if (dispach) {
      cityHandler();
    }
  
  }, []);

  console.log(weather);
  console.log(imageTime)

  if (imageTime === "Clouds") {
    img = "cu nori"
    props.getImg("url(/images/withCloudsDay.avif)")

  } else if (imageTime === "Mist") {
    img = "cu ceata";
  } else if (imageTime === "Snow") {
    img = " cu zapada";
  } else if (imageTime === "Rain") {
    img = "cu ploaie";
  } else if (imageTime === "Snow") {
    img = " cu ninsoare";
  }else if (imageTime==="Clear"){
    img= "cer limpede"
    props.getImg("url(/images/clearSkyDay.jpg")
  }

  return (
    <div className="main-page" >
      <div>
      <ul >
        <li>{weather.name}</li>
        {!!weather.main && <li> sunt {Math.round(weather.main.temp)}</li>}
        <li>{img}</li>
      </ul>
      </div>
      <div className="blurDiv">
    <h1>GG</h1>
      </div>
    </div>
  );
};

export default StaticCity;
