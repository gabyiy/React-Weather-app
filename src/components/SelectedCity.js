import React,{useEffect, useState} from "react"
import "./SelectedCity.css"

const SelectedCity= (props)=>{

    var img=""

    const [weather,setWheather]=useState({})
    const [imageTime,setImageTime]=useState("")

    useEffect(()=>{
const retriveDataHandler=()=>{
    setWheather(props.addData)
 
    setImageTime(props.addData.weather[0].main)
}
console.log(weather)
console.log(imageTime)
retriveDataHandler()

props.getImgNStatic()

},[props.addData])


  if (imageTime === "Clouds") {
    img = "cu nori"
    props.getImgNStatic("url(/images/withCloudsDay.avif)")

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
    props.getImgNStatic("url(/images/clearSkyDay.jpg)")
  
} 
    return (
  
   <div className="text">
     <ul>
  
  {!!weather.main && <li>In {weather.name}</li>}
  
  {!!weather.main &&<li> sunt {Math.round(weather.main.temp)}</li>}
  
  <li> {img}</li>
  
     </ul>
   </div>
    );
}

export default SelectedCity