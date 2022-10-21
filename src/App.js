import logo from './logo.svg';
import './App.css';
import Faq from './components/faq';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/index';
import Product from './components/product';
import ProductDetail from './components/productdetail';
import { Component } from 'react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<index />} /> */}
          <Route path="products" element={<Product />} />
          
          <Route path="Home" element={<Home />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="productdetail" element={<ProductDetail />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
