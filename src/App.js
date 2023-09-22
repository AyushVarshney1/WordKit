// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, { useState } from 'react'

function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  
  return (
    <>
      <Navbar title = "WordKIT" toggleMode = {toggleMode} />
      <Form mode={mode}/>
    </>
    
  );
}

export default App;
