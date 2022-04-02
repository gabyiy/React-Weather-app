import React,{useState} from 'react';
import './App.css';


function App() {

  var img=""
  

  const [query,setQuery]=useState("")
const [weather,setWheather]=useState({})

const [imageTime,setImageTime]=useState("")

const api={
  key:"dbafe88a6b45337add3d8fb21f6cea2e",
  url:"https://api.openweathermap.org/data/2.5/"
}



const search= async(evt)=>{
if(evt.key==="Enter"){

  const response=await fetch(`${api.url}weather?q=${query}&appid=${api.key}&units=metric`)
  const data =await response.json()
  
    setWheather(data)
    setQuery("")

    setImageTime(data.weather[0].main)
    console.log(data);

}
}
  if(imageTime==="Clouds"){
    img="sunt nori"
  }
  
  return (

 <div>
   <ul>
   <input  onChange={e => setQuery(e.target.value)}

value={query}

onKeyPress={search}></input>

{!!weather.main &&<li>{weather.main.temp}</li>}

<li>{img}</li>
<button>Push</button>
   </ul>
 </div>
  );
}

export default App;
