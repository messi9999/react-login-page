import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

function App() {
  const [currentform, setCurrentform] = useState("login");

  const toggleForm = (formName) => {
    setCurrentform(formName);
  };
  return (
    <div className="App">
      {currentform === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
