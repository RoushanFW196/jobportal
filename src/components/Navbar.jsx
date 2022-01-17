
import React from 'react';
 import { Registeration } from './Registerform';
 import {Login} from "./Loginform";
 import { Routes, Route } from "react-router-dom"
import './Navbar.css';
//import  Registeration  from './Registerform';
//import Login from './Loginform';





 export const Navbar=()=>{

    return(
  
      <div className="navbar">
      <h1>JObs</h1>
     <button >Register</button>
     <button >Login</button>
     
  <Registeration/>
     <Login/>


 



  </div>
     
    )
};