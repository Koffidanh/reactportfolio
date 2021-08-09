import React from "react";
 import { Link } from "react-router-dom";
//import {Link} from 'react-scroll';
import "../Navbar/style.css";
import linkedin from './linkedin.png';
import github from './github.png';
import download from "./download.png";
import upwork from "./upwork.png";
import favicon from "./favicon.png";
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VFXSpan } from 'react-vfx';
import * as VFX from 'react-vfx';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavbarBack() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/Portfolio"  
      className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
      >
      <a className="navbar-brand" ><VFX.VFXImg alt="favicon" src={favicon} shader="rgbShift" width="50px"
                height="50px"/></a>
      </Link>
      <div>
        <ul className="navbar-nav" style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li className="nav-item">
            <Link activeClass="active"  spy={true} smooth={true}
              to="/Portfolio"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Home
            </Link>
         </li>
        </ul>
      </div>
      
      <div><a className="navbar-brand" href="https://www.linkedin.com/in/boris-koffi-danhounsrou-59556955" target="_blank" rel="noopener noreferrer"><img src={linkedin} style={{maxHeight:40}} alt="linkedIn" /> </a></div>
    <div><a className="navbar-brand" href="https://github.com/Koffidanh" target="_blank" rel="noopener noreferrer"><img src={github} style={{maxHeight:40}} alt="github" /> </a></div>
    <div><a className="navbar-brand" href="https://docs.google.com/document/d/1FlrnGU9Q_zsd8MRHkEKsnp7o1aW422_ME6vCmK0OKj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" ><img src={download} style={{maxHeight:40}} alt="download" /> </a></div>
    <div> <a className="navbar-brand" href="https://www.upwork.com/ab/create-profile/v1/submit" target="_blank" rel="noopener noreferrer" ><img src={upwork} style={{maxHeight:40}} alt="Upwork" /> </a></div>
    <div><a className="navbar-brand" href="mailto: koffi.danh@gmail.com" target="_blank" rel="noopener noreferrer" >  <FontAwesomeIcon icon={faBook} size="2x"  alt="email"/> </a></div>
    </nav>
  );
}

export default NavbarBack;
