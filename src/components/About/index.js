import React from 'react';
import "../About/index.css";
import { Container, Row, Col, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import backgroundImage from "./bg.jpg"
AOS.init();
export default function About() {
    return (
        <Container >
            <Row >
                <Col style={{ justifyContent: "center" }}>
                    <div className="card" style={{ maxHeight: 350 }} >
                        <FontAwesomeIcon style={{display:"flex", marginLeft:"auto", marginRight:"auto"}} icon={faSeedling} size="5x" alt="welcome new opportunity" />
                        <FontAwesomeIcon style={{display:"flex", marginLeft:"auto", marginRight:"auto"}} icon={faHands} size="5x" alt="welcome new opportunity" />

                    </div>
                    <br></br>
                    <div className="card" style={{ height: 100 }}>
                        <p  style={{textAlign:"center"}}>Welcoming new opportunity to grow.
                        </p>
                    </div>
                </Col>
                <Col style={{ justifyContent: "center" }}>
                    <div className="card" style={{ maxHeight: 350 }}>
                        <FontAwesomeIcon style={{display:"flex", marginLeft:"auto", marginRight:"auto"}} icon={faServer} size="10x" alt="Ability to work on the Backend" />


                    </div>
                    <br></br>
                    <div className="card" style={{ height: 100 }}>
                        <p style={{textAlign:"center"}} >Ability to work on Backend.
                        </p>
                    </div>
                </Col>
                <Col style={{ justifyContent: "center" }}>
                    <div className="card" style={{ maxHeight: 350 }} >

                        <FontAwesomeIcon style={{display:"flex", marginLeft:"auto", marginRight:"auto"}} icon={faLaptopCode} size="10x" alt="Ability to work on the Backend" />
                        {/* <FontAwesomeIcon   icon={faMobileAlt}  size="5x"  alt="Ability to work on the Backend"/>                      */}

                    </div>
                    <br></br>
                    <div className="card" style={{ height: 100 }}>
                        <p style={{textAlign:"center"}} >Ability to work on Frontend.
                        </p>
                    </div>
                </Col>

            </Row>
            <br></br>
            <div className="card">

                <div className="container" style={{ height: 100 }}>
                    <p>Full Stack Web Developer to build quality web and mobile
                        applications.
                    </p>
                </div>
            </div>
        </Container>
    )
}
