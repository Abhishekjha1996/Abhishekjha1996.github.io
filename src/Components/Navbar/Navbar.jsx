import Link from "react-scroll/modules/components/Link";
import React from "react";
import Hamburger from  'hamburger-react';
import "./Navbar.css";
import pdf from "./Abhishek_Jha_Resume.pdf"
// import { Link } from "react-router-dom";



export default function Navbar() {
  
  return (
    <div className="navbar" id="nav-menu">
      <div className="logo">
        <h1 className="logo-h1" style={{fontFamily:"cursive"}}>Abhishek Jha</h1>
      </div>
      <input id="checkbox" type="checkbox" />
      <div id="bar">
        <label htmlFor="checkbox">
        
      <Hamburger className="Hamburger"/>
        </label>
      </div>
      <ul className="nav-ul">
        <Link to="home" smooth={true} duration={500} className="nav-link.home">
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500} className="nav-link.about" >
          <li>About</li>
        </Link>
        <Link to="skills" smooth={true} duration={500} className="nav-link.skills">
          <li>Skills</li>
        </Link>
        <Link to="project" smooth={true} duration={500} className="nav-link.projects" >
          <li>Projects</li>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link.contact" >
          <li>Contact</li>
        </Link>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          download
        >
          <li id="resume-button-1">Resume</li> 
          
        </a>
      </ul>
      
    </div>
    
  );
}