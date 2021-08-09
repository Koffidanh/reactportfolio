import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project8Image from "../Project8/notetaker.png";
import jobAid from "../JobAid";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project8() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/noteTaker"
              className={
                window.location.pathname === "/noteTaker" 
                  
              }
            >
             <h2 >Note Taker</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/noteTaker"
              className={
                window.location.pathname === "/noteTaker" 
                  
              }
            >
             <img src={project8Image}  style={{height: 350}}
                       
                        alt="Note Taker page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were HTML, JavaScript, CSS, Express and Heroku.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This 'Note Taker' was created to generate to help the user to organize his /her daily life or work.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
