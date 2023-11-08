import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light'); //this will show dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2f6b6c";
      document.body.style.color = "white";
    }
    else {
    setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";


    }
  }
  return (
    <>
    <div>
      <Navbar title="SPELL-CORRECT" mode={mode} darkMode="Dark Mode" toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze Below" mode={mode}/>
        {/* <About/> */}
      </div>
      </div>
      <Footer/>
    </>
  )
};

export default App;
