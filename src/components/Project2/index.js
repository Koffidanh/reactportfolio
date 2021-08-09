import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project2Image from "../Project2/workplanner.png";
import workPlanner from "../WorkPlanner";
import { Link } from "react-router-dom";
import "../Project1/index.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project2() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/workPlanner"
              className={
                window.location.pathname === "/workPlanner" 
                  
              }
            >
             <h2 >Work Planner</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/workPlanner"
              className={
                window.location.pathname === "/workPlanner" 
                  
              }
            >
             <img src={project2Image} style={{height: 255}}
                        
                        alt="Work planner page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, Jquery, CSS, and Moment().js.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">Work Planner was created to help the user plan his/her daily work
              schedule.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
