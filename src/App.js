import React from "react";
import './App.css';
import {Header} from './components/Header/Header'
import {Home} from "./components/Home/Home";
import {Services} from "./components/Services/Services";
import {Appointments} from "./components/Appointments/Appointments";


export const App = () => {
  return (
      <div className="app-wrapper">
        <Header/>
        <Home/>
        <Services/>
        <Appointments/>
      </div>
  )
}