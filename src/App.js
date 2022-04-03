import React,{Fragment, useState} from 'react';
import './App.css';
import SelectedCity from './components/SelectedCity';
import StaticCity from './components/StaticCity';


function App() {

const [selectCity,setSelectedCity]=useState(false)

console.log(selectCity);
 return(
   <Fragment>
  {!selectCity?<><StaticCity/><SelectedCity setCity={setSelectedCity}/></>: 
  <>  <SelectedCity setCity={setSelectedCity}/></> }
   </Fragment>
 )
}

export default App;
