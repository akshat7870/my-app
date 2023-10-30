import "./App.css";
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      
      {/* <Navbar title="Looks" aboutText="About Us" /> */}
      {/* <Navbar /> */}
      {/* <Navbar title="Look's C👀der" mode={mode} toggleMode={toggleMode} /> */}
      <Navbar title="Look's C👀der" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
          <TextForm heading="Enter the text to analyze below 😊" mode={mode} />
          {/* <About/>  */}
      </div>
    </>
  );
}

export default App;
