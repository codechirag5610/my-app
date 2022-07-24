
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtilities" aboutText="About Us" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          <Route path="/about" element={<About/>}>
              
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze." mode={mode} />}>  
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
