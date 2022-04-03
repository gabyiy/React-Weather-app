import React,{useState} from "react"
import Input from "./Ui/Input"

const SelectedCity= (props)=>{

    var img=""

    const [weather,setWheather]=useState({})
    const [imageTime,setImageTime]=useState("")

const retriveDataHandler=(weatherData)=>{
    setWheather(weatherData)
  props.setCity(true)
    setImageTime(weatherData.weather[0].main)
}

if(imageTime==="Clouds"){
    img="cu nori"
  }else if (imageTime==="Mist"){
    img = "cu ceata"
  }else if(imageTime==="Snow"){
    img= " cu zapada"
  }else if(imageTime==="Rain"){
    img="ploua"
  }else if (imageTime==="Snow"){
    img= "cer limpede"
  }

    return (
  
   <div>
     <ul>
   <Input adData={retriveDataHandler} />
  {!!weather.main && <li>In {weather.name}</li>}
  
  {!!weather.main &&<li> sunt {Math.round(weather.main.temp)}</li>}
  
  <li> {img}</li>
  
     </ul>
   </div>
    );
}

export default SelectedCity