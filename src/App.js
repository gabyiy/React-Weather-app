import React,{Fragment, useState} from 'react';
import './App.css';
import SelectedCity from './components/SelectedCity';
import StaticCity from './components/StaticCity';
import Input from './components/Ui/Input';


function App() {

const [selectCity,setSelectedCity]=useState(false)
const [data,setData]=useState({})

const dataHandler=(data)=>{
setData(data)

}
 return(
   <Fragment>
   <Input getData={dataHandler}  setCity={setSelectedCity}/>
  {!selectCity?<StaticCity/>: 
    <SelectedCity addData={data} /> }
   </Fragment>
 )
}

export default App;
