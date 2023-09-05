import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";

const App = () => {
  
  return (
   
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        
      </Routes>
  
  );

};

export default App;
