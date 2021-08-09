import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project9Image from "../Project9/voyagr-background.png";
import jobAid from "../Voyagr";
import { Link } from "react-router-dom";
import AOS from 'aos';
import "../Project1/index.css"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project9() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/voyagr"
              className={
                window.location.pathname === "/voyagr" 
                  
              }
            >
             <h2 >voyagr</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/voyagr"
              className={
                window.location.pathname === "/voyagr" 
                  
              }
            >
             <img className="voyagrimag" src={project9Image} style={{maxHeight: 350}} 
                        
                        alt="Voyagr page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were HTML, JavaScript, CSS, Express and Heroku.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This 'Voyagr' was created for user to record their travel.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
