import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects"
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
