import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import MainRoutes from "./Routes/MainRoutes";


function App() {
  useEffect(() => {
    document.title = "LNM Garage";
 }, []);
  return (
    <div className="app">
      <MainRoutes/>
      
    </div>
  );
}

export default App;