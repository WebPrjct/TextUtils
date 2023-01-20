import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alerts";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [switchText, SetSwitchText] = useState("Enable dark mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      SetSwitchText("Disable dark mode");
      showAlert("dark mode enable", "success");

      // setInterval(() => {
      //   document.title='TextUtils-Dark Mode';
      // }, 1000);
      // setInterval(() => {
      //   document.title='Install xyz to watch free web series';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      SetSwitchText("Enable dark mode");
      showAlert("dark mode disable", "success");
      document.title = "TextUtils-Home";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          tittle="TextAnalyse.com"
          homeName="Home"
          mode={mode}
          ToggleMode={ToggleMode}
          switchText={switchText}
        />
        <Alert alert={alert}/>
        {/* <Routes> */}
          {/* <Route path="/About" element={<About/>}> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/" element={
          <TextForm heading="Enter your text below"
              mode={mode}
              showAlert={showAlert}/>}>
          </Route> */}
          <TextForm heading="Enter your text below"
              mode={mode}
              showAlert={showAlert}/>
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
