import React from 'react';
import './App.css';
import Color from './components/color.js';
import  './components/color.css';
import BlueImg from './components/blue.png';
import OrngImg from './components/orange.png';


function App() { 
  return (
    <div className="App">
      <img src={BlueImg} width="150px" height="150px"/>
      <Color colorName="  blue" /> 
      <img src={OrngImg} width="150px" height="150px"/>
      <Color colorName="  orange" /> 
    
    </div>
  );
}

export default App;
