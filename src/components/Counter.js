import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

export const Counter=()=>{

return (
  <Countdown date={Date.now() + 1000000000} />
)
}