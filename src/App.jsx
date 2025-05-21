import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home"; // New combined component


import Reconnect from "./Components/Reconnect";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import GithubStatistics from "./Components/GithubStatistics.jsx";

// import Workexperience from "./Components/Workexperience";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme />} />
        {/* <Route path="/work" element={<Workexperience />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/github" element = {<GithubStatistics/>}/>
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
