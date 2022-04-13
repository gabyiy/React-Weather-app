import React,{Fragment, useState} from 'react';
import './App.css';
import SelectedCity from './components/SelectedCity';
import StaticCity from './components/StaticCity';
import Input from './components/Ui/Input';


function App() {

const [selectCity,setSelectedCity]=useState(false)
const [data,setData]=useState({})
const [imgStatic,setImgStatic]= useState("")
const [imgNotStatic,setImgNotStatic]=useState("")
const dataHandler=(data)=>{
setData(data)

}
const imgHandler=(imgStatic)=>{
  setImgStatic(imgStatic)
  setImgNotStatic(imgStatic)
}

if(!selectCity){
var myStyle={
  backgroundImage: 
imgStatic,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
}else{
  var myStyle={
    backgroundImage: 
  imgNotStatic,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
}
 return(
 <div style={myStyle}>
  
   <Input getData={dataHandler}  setCity={setSelectedCity}/>
  
  {!selectCity?<StaticCity getImg={imgHandler}/>: 
    <SelectedCity addData={data} getImgNStatic={imgHandler} /> }
   
  
   </div>
 )
}

export default App;
