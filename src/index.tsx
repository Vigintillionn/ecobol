import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import Bestel from './pages/Bestel';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Info from './pages/Info';
import Layout from './pages/Layout';
import Over from './pages/Over';
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
          <Route path="bestel" element={<Bestel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
