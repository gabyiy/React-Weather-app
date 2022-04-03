import React,{useState} from "react"


const Input = (props)=>{

    const [query,setQuery]=useState("")
  
  const api={
    key:"dbafe88a6b45337add3d8fb21f6cea2e",
    url:"https://api.openweathermap.org/data/2.5/"
  }
  
  
  
  const search= async(evt)=>{
  if(evt.key==="Enter"){
  
    const response=await fetch(`${api.url}weather?&q=${query}&appid=${api.key}&units=metric`)
    const data =await response.json()
    props.adData(data)

      setQuery("")
    
      console.log(data);
  
  }
  }

    return(

<input  onChange={e => setQuery(e.target.value)}
  
  value={query}
  
  onKeyPress={search}></input>
    )
}
export default Input