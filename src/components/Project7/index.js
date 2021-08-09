import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project7Image from "../Project7/jobaid.png";
import jobAid from "../JobAid";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project7() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/jobAid"
              className={
                window.location.pathname === "/jobAid" 
                  
              }
            >
             <h2 >JobAid</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/jobAid"
              className={
                window.location.pathname === "/jobAid" 
                  
              }
            >
             <img src={project7Image} style={{height: 270}}
                        
                        alt="JobAid page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, JavaScript, CSS, Sequelize, MySQL, Handlebars, Express and Heroku.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">JOBAID was created to increase revenue for small to medium sized businesses.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
