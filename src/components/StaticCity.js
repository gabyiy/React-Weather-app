import React,{useState,useEffect} from "react"
import Input from "./Ui/Input"

const StaticCity= ()=>{


    var img=""
  

    const [query,setQuery]=useState("")
  const [weather,setWheather]=useState({})
  
  const [imageTime,setImageTime]=useState("")
  
  const api={
    key:"dbafe88a6b45337add3d8fb21f6cea2e",
    url:"https://api.openweathermap.org/data/2.5/"
  }
  
  
 useEffect(()=>{
  const cityHandler= async()=>{
  
  
    const response=await fetch(`${api.url}weather?&q=madrid&appid=${api.key}&units=metric`)
    const data =await response.json()
    
      setWheather(data)
      setQuery("")
  
      setImageTime(data.weather[0].main)
      console.log(data);
  
  }
  cityHandler()
},[]) 
  
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
    <li>{weather.name}</li>
    {!!weather.main &&<li> sunt {Math.round(weather.main.temp)}</li>}
     </ul>
   </div>
    );
}

export default StaticCity