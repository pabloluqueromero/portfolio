import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

import './App.css';

export default function App() {
  return (
    <main  className="main-contianer ">
      <Navbar />
      <Home />
      <Education />
      <Education />
      <Education />
      <Education />
      <Education />
      <Education />
      <Education />
      <Education />
      {/* <About />
      <Projects />
      <Skills />
    <Contact /> */}
    </main>
  );
}