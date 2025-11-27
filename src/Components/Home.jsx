// Components/Home.jsx

import React from "react";
import Reconnect from "./Reconnect";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import GithubStatistics from './GithubStatistics';

// import GithubStatistics from "./GithubStatistics";
// import Workexperience from "./Workexperience";
import Experience from "./Experience";

const Home = () => {
  return (
    <>
      <section id="home"><Reconnect /></section>
      <section id="about"><Aboutme /></section>
      <section id="experience"><Experience /></section>
      {/* <section id="work"><Workexperience /></section> */}
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <section id="github"><GithubStatistics /></section>
    </>
  );
};

export default Home;
