import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Dashbaord/Layout";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/dashbaord/*" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
