import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //this will show dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2f6b6c";
      document.body.style.color = "white";
      showAlert("Enabled Dark Mode", 'success');
      document.title = "Spell-Correct - Dark mode";
      // setInterval(() => {
      //   document.title="Spell-correct is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Spell-correct";
      // }, 1500);
    }
    else {
    setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enables", 'success');
      document.title = "Spell-Correct - Light mode"

    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
    
  return (
    <>
        <Navbar title="SPELL-CORRECT" mode={mode} darkMode="Dark Mode" toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>
      <About />
      </div> */}
      <Routes>
          <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode}/>} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      <Footer/>
    </>
  )
};

export default App;
