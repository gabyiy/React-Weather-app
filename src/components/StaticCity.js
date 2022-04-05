import React, { useState, useEffect } from "react";

const StaticCity = () => {
  var img = "";

  const [weather, setWheather] = useState({});

  const [imageTime, setImageTime] = useState("");

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
    };
    weatherInit();

    const cityHandler = async (lat, lon) => {
      const response = await fetch(
        `${api.url}weather?&lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
      );
      const data = await response.json();

      setWheather(data);
    };
    cityHandler();
  }, []);

  if (imageTime === "Clouds") {
    img = "con nubes";
  } else if (imageTime === "Mist") {
    img = "con niebla";
  } else if (imageTime === "Snow") {
    img = " con nieve";
  } else if (imageTime === "Rain") {
    img = "con lluvia";
  } else if (imageTime === "Snow") {
    img = "ciello despejado";
  }

  return (
    <div>
      <ul>
        <li>{weather.name}</li>
        {!!weather.main && <li> sunt {Math.round(weather.main.temp)}</li>}
        <li>{img}</li>
      </ul>
    </div>
  );
};

export default StaticCity;
