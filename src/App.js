import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Projects from "pages/Projects/Projects";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Cursor from "components/Cursor/Cursor";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
