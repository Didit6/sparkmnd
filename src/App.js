import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./components/index";
import Halaman2 from "./components/Halaman2";
import Tiga0 from './components/302';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Halaman2 />} />
      <Route path="/halaman2" element={<Index />} />
      <Route path="*" element={<Tiga0 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
