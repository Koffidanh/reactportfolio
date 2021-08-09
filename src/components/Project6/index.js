import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project6Image from "../Project6/burger.png";
import burgerLogger from "../BurgerLogger";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project6() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/burgerLogger"
              className={
                window.location.pathname === "/burgerLogger" 
                  
              }
            >
             <h2 >Burger Logger</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/burgerLogger"
              className={
                window.location.pathname === "/burgerLogger" 
                  
              }
            >
             <img src={project6Image} style={{height:220}}
                        
                        alt="Burger Logger page" />
                    <div className="overlay">
                        {/* <div className="text">Tools used were Bootstrap, JavaScript, CSS, Orm, MySQL, Handlebars, Express and Heroku.
                </div> */}
                    </div>
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">This 'Burger Logger ' was created to log in your favorite burger that you wish to eat.</p>
                </Col>
                
            </Row>
        </Container>
    )
}
