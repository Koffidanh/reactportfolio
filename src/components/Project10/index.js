import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project10Image from "../Project10/workouttracker.png";
import jobAid from "../Voyagr";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project10() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/workoutTracker"
              className={
                window.location.pathname === "/workoutTracker" 
                  
              }
            >
             <h2 >voyagr</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col>
                <Link
              to="/workoutTracker"
              className={
                window.location.pathname === "/workoutTracker" 
                  
              }
            >
             <img src={project10Image} width="100%" height=" 100%"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="workoutTracker page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were HTML, JavaScript, CSS, Express and Heroku.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This 'workoutTracker' was created to record the user work activity.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
