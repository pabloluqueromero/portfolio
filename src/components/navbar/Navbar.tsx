// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css'
export default function Navbar() {
  return (
    <header className="header">
      <div className="navbar-container">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#" className="navbar-name">
            Pablo Luque
          </a>
        </a>
        <nav className="navbar">
          <a href="#education" className="navbar-item">
            Education
          </a>
          <a href="#projects" className="navbar-item">
            Projects
          </a>
          <a href="#skills" className="navbar-item">
            Skills
          </a>
          <a href="#work" className="navbar-item">
            Work Experience
          </a>
        </nav>
        <a
          href="#contact"
          className="navbar-item navbar-contact-item">
          Get in touch
          <ArrowRightIcon className="arrow-icon" />
        </a>
      </div>
    </header>
  );
}