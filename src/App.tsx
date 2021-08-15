import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";

import './App.scss';
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";

export default function App() {

  return (
    <main className="main-contianer ">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Sidebar />
      <Footer />
    </main>
  );
}