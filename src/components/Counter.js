import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import "./Navbar.css";

export const Counter=()=>{

return (
<div className="counter">
  <Countdown  date={Date.now() + 1000000000} />
  </div>
  
)
}