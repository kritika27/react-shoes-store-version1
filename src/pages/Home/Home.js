import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";

export const Home = () => {
  return(
    <div className="info">
    <div className="content">
      <div className="head">
        <h1>Ready for new stuff</h1>
        <p>Buy new stock at reasonable cost</p>

        <Link to="/products">
          <button>Buy Sneakers</button>
        </Link>
      </div>
    </div>
    <div className="pic"></div>
  </div>
  )
}

