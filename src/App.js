
import './App.css';
import { Counter } from "./components/Counter";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { Products } from './pages/Products/Products';
import React, { lazy, Suspense } from "react";
import {  Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Counter/>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          
        </Routes>
     
    </>
  );
}


export default App;
