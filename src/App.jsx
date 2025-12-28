import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Blog from "@/pages/Blog/Blog";
import Projects from "@/pages/Projects/Projects";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
