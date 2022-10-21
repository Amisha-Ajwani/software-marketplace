import logo from './logo.svg';
import './App.css';
import Faq from './components/faq';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import products from './components/product';
import ProductDetail from './components/productdetail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path="products" element={<products />} />
          <Route path="Faq" element={<Faq />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
