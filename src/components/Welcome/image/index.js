import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import upwork from "../Network/upwork.png"
import download from "../Network/download.png"
import linkedin from '../Network/linkedin.png'
import github from '../Network/github.png'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import "../Network/index.css"
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Network() {
  return (
    <>
      <Row>
        <Col>
        <nav className="navbar navbar-expand-lg navbar-light ">

<div className="card">
  <ul className="navbar-nav">
    <li className="nav-item">

      <a className="navbar-brand" href="https://www.linkedin.com/in/boris-koffi-danhounsrou-59556955" target="_blank" rel="noopener noreferrer"><img src={linkedin} width="20%" alt="Upwork" /> </a>

    </li>

  </ul>
</div>
</nav>
        </Col>
       
      </Row>
      <Row>
        <Col>
        <nav className="navbar navbar-expand-lg navbar-light ">

<div className="card">
  <ul className="navbar-nav">
    <li className="nav-item">

      <a className="navbar-brand" href="https://github.com/Koffidanh" target="_blank" rel="noopener noreferrer"><img src={github} width="20%" alt="github" /> </a>

    </li>

  </ul>
</div>
</nav>
        </Col>
       

      </Row>
      <Row>
        <Col>
        <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="card">
          <ul className="navbar-nav">
            <li className="nav-item">

              <a className="navbar-brand" href="https://www.upwork.com/ab/create-profile/v1/submit" target="_blank" rel="noopener noreferrer" ><img src={upwork} width="20%" alt="Upwork" /> </a>

            </li>

          </ul>
        </div>
      </nav>
        </Col>
        </Row>
      <Row>
        <Col>
        <nav className="navbar navbar-expand-lg navbar-light ">

<div className="card">
  <ul className="navbar-nav">
    <li className="nav-item">

      <a className="navbar-brand" href="https://docs.google.com/document/d/1FlrnGU9Q_zsd8MRHkEKsnp7o1aW422_ME6vCmK0OKj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" ><img src={download} width="35%" alt="download" /> </a>

    </li>

  </ul>
</div>
</nav>
        </Col>
       </Row>

       <Row>
        <Col>
        <nav className="navbar navbar-expand-lg navbar-light ">

<div className="card">
  <ul className="navbar-nav">
    <li className="nav-item">

      <a className="navbar-brand" href="mailto: koffi.danh@gmail.com" target="_blank" rel="noopener noreferrer" >  <FontAwesomeIcon icon={faBook} size={{5x}}  alt="email"/> </a>

    </li>

  </ul>
</div>
</nav>
        </Col>
       </Row>

    </>
  );
}

export default Network;
