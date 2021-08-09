import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project3Image from "../Project3/weathertracker.png";
import weatherTracker from "../WeatherTracker";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project3() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/weatherTracker"
              className={
                window.location.pathname === "/weatherTracker" 
                  
              }
            >
             <h2 >Weather Tracker</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/weatherTracker"
              className={
                window.location.pathname === "/weatherTracker" 
                  
              }
            >
             <img src={project3Image} style={{height: 235}}
                        
                        alt="Work planner page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, Jquery, CSS, and OpenWeather API.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This Weather Tracker was created to help the user plan his/her trip
              around world.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
