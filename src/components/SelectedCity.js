import React,{useEffect, useState} from "react"
import "./StaticCityAndSelectedCity.css"

const SelectedCity= (props)=>{

    var today = new Date();
    var hh=String(today.getHours()).padStart(2, '0')
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    
      const [icon,setIcon]=useState("")
      const[clouds,setClouds]=useState("")
      const [humidity,setHumidity]=useState("")
      const [wind,setWind]=useState("")
      const [temp,setTemp]=useState("")
      const [tempMax,setTempMax]=useState("")
      const [minTemp,setMinTemp]=useState("")
      const [feelsLike,setFeelsLike]=useState("")
      const [city,setCity]=useState("")
    
    const [weather,setWheather]=useState({})
    const [imageTime,setImageTime]=useState("")

    useEffect(()=>{
const retriveDataHandler=()=>{
    setWheather(props.addData)
 
    setImageTime(props.addData.weather[0].main)
    setClouds(props.addData.clouds.all)
    setHumidity(props.addData.main.humidity)
    setWind(Math.round(props.addData.wind.speed))
    setTempMax(Math.round(props.addData.main.temp_max))
    setMinTemp(Math.round(props.addData.main.temp_min))
    setFeelsLike(Math.round(props.addData.main.feels_like))
    setTemp(Math.round(props.addData.main.temp))
    setCity(props.addData.name)
    setIcon(props.addData.weather[0].icon)
}
console.log(weather)
console.log(imageTime)
retriveDataHandler()

props.getImgNStatic()

},[props.addData])

const imaine= `http://openweathermap.org/img/wn/${icon}.png`

  if (imageTime === "Clouds" && hh>=7 && hh<20  ) {
    props.getImgNStatic("url(/images/clouds.avif)")

  }else if  (imageTime === "Clouds") {
    props.getImgNStatic("url(/images/nigthClouds.jpg)")

  }else if ( imageTime === "Fog"|| imageTime === "Mist"  && hh>=7 && hh<20) {
    props.getImgNStatic("url(/images/mist.webp)")
  }else if  ( imageTime === "Fog" || imageTime === "Mist" ) {
    props.getImgNStatic("url(/images/nigthMist.jpg)")

  }
   else if (imageTime === "Snow" && hh>=7 && hh<20) {
    props.getImgNStatic("url(/images/snow.jpg)")

  }else if (imageTime === "Snow") {
    props.getImgNStatic("url(/images/nigthSnow.jpg)")

  }
   else if ( imageTime ==="Drizzle" || imageTime === "Rain" && hh>=7 && hh<20 ) {
    props.getImgNStatic("url(/images/rain.jpg)")
  } else if ( imageTime ==="Drizzle" || imageTime === "Rain"  ) {
    props.getImgNStatic("url(/images/rainy-night.jpg)")
  }
   else if (imageTime==="Clear" && hh>=7 && hh<20){
  
    props.getImgNStatic("url(/images/clearSkyDay.jpg)")
  
} else if (imageTime==="Clear"){
  
  props.getImgNStatic("url(/images/clearSkyNigth.jpg)")

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
}

export default SelectedCity