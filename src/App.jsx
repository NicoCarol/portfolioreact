import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
