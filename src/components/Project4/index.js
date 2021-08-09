import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project4Image from "../Project4/codingquiz1.png";
import codingQuiz from "../CodingQuiz";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project4() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/codingQuiz"
              className={
                window.location.pathname === "/codingQuiz" 
                  
              }
            >
             <h2 >Coding Quiz</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/codingQuiz"
              className={
                window.location.pathname === "/codingQuiz" 
                  
              }
            >
             <img src={project4Image} style={{height: 235}}
                       
                        alt="Coding quiz page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, JavaScript, CSS.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This Coding Quiz was created to test the user Knowledge on Web
              Development content.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
