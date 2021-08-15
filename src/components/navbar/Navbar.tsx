import React, { useEffect, useState } from "react";
import { CubeTransparentIcon, DownloadIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
import './Navbar.scss'
import NavBarOptions from "./NavBarOptions";
import { socialLink } from "../../data";


var prevScrollPos: number = 0;
export default function Navbar() {

  const [isChecked, setIsChecked] = useState(false);
  const [showShadow, setShadow] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  const handleNavbar = () => {
    if (isChecked) {
      //DOnt hide scroll on nav
      return;
    }
    let currentPos = window.scrollY;
    setShadow(currentPos >= 100);

    if (currentPos <= 300) {
      if (!showNavbar) {
        setShowNavbar(true);
      }
      prevScrollPos = currentPos;
      return

    }
    if ((prevScrollPos > currentPos) !== showNavbar) {
      setShowNavbar(prevScrollPos > currentPos);
    }
    prevScrollPos = currentPos;
  }

  const handleMouse = (e: MouseEvent) => {
    if (e.clientY < 40) {
      setShowNavbar(true);
    };
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavbar);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleNavbar);
      window.removeEventListener('mousemove', handleMouse);
    };
  });
  return (
    <header className={`header ${showShadow ? 'shadow' : ''} ${showNavbar ? 'show' : 'hide'}`} >
      <div className="navbar-container">
        <div className="navbar-large-container">
          <a href="#home" className="navbar-name">
            <CubeTransparentIcon className="code-icon"></CubeTransparentIcon>
          </a>
          <nav className="navbar">
            <NavBarOptions hideNavbar={() => setIsChecked(false)} />
          </nav>
          <MenuIcon onClick={(e) => { setIsChecked(true) }} className="menu-icon"></MenuIcon>
        </div>

        <div className={isChecked ? "overlay" : ""} onClick={() => setIsChecked(false)} />
        <nav className={isChecked ? 'navbar-small-visible navbar-small' : 'navbar-small'}>
          <XIcon className="close-icon" onClick={() => setIsChecked(false)} />
          <a href={socialLink.cv} target='_blank' rel="noreferrer" className="download-anchor"><DownloadIcon className="download-icon" /></a>
          <NavBarOptions hideNavbar={() => setIsChecked(false)} />
        </nav>
      </div>

    </header>
  );
}