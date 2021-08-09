import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project5Image from "../Project5/generatepassword.png";
import codingQuiz from "../CodingQuiz";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project5() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/passwordGenerator"
              className={
                window.location.pathname === "/passwordGenerator" 
                  
              }
            >
             <h2 >Password Generator</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/passwordGenerator"
              className={
                window.location.pathname === "/passwordGenerator" 
                  
              }
            >
             <img src={project5Image} style={{height: 270}}
                        
                        alt="Password Generator page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, JavaScript, CSS.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This Password Generator was created to generate a high security
              password.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
