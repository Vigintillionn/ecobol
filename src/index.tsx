import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Over from './pages/Over';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Shop from './pages/Shop';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="over" element={<Over />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="info" element={<Info />}></Route>
          <Route path="shop" element={<Shop />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
