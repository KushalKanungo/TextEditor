// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Welcome from './components/Welcome';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#151426'
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setTimeout(() => {
        showAlert("Light Mode has been enabled", "success")
      }, 1000);

    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }
      ,
      1500
    )
  }

  return (
    <>
      <Router>
        <Navbar companyName="TextEditor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/about">
            <div className="container mt-5">
              <About />
            </div>
          </Route>

          <Route exact path="/">
            <div className="container ">
              <Welcome name="KUSHAL" mode={mode} />
              <TextForm mode={mode} showAlert={showAlert} />
            </div>
          </Route>
        </Switch>
      </Router>


    </>

  );
}

export default App;
