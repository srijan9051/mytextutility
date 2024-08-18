import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from  './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const aboutRef = useRef(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 13 77)';
      document.title = "TextUtils - Dark Mode";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 2000);
      if (aboutRef.current) {
        aboutRef.current.toggleStyle();
      }
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
      setTimeout(() => {
        document.title = "TextUtils";
      }, 2000);
      if (aboutRef.current) {
        aboutRef.current.toggleStyle();
      }
    }
  };

  const changeColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <Router>
      <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About ref={aboutRef} />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
