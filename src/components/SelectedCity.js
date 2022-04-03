import React,{useEffect, useState} from "react"

const SelectedCity= (props)=>{

    var img=""

    const [weather,setWheather]=useState({})
    const [imageTime,setImageTime]=useState("")

    useEffect(()=>{
const retriveDataHandler=()=>{
    setWheather(props.addData)
 
    setImageTime(props.addData.weather[0].main)
}
retriveDataHandler()

},[props.addData])

if(imageTime==="Clouds"){
  img="con nubes"
}else if (imageTime==="Mist"){
  img = "con niebla"
}else if(imageTime==="Snow"){
  img= " con nieve"
}else if(imageTime==="Rain"){
  img="con lluvia"
}else if (imageTime==="Snow"){
  img= "ciello despejado"
}


    return (
  
   <div>
     <ul>
  
  {!!weather.main && <li>In {weather.name}</li>}
  
  {!!weather.main &&<li> sunt {Math.round(weather.main.temp)}</li>}
  
  <li> {img}</li>
  
     </ul>
   </div>
    );
}

export default SelectedCity