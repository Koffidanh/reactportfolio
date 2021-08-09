import React from "react";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card } from 'reactstrap';
import Profile from "../Profile"
import About from "../About"
import Project1 from "../Project1";
import "./index.css";
import Project2 from "../Project2";
import Project3 from "../Project3";
import Project4 from "../Project4";
import Project5 from "../Project5";
import Project6 from "../Project6";
import Project7 from "../Project7";
import Project8 from "../Project8";
import Project9 from "../Project9";
import Experiences from "../Experiences"
import Skills from "../Skills"
import Educations from "../Educations";
import Navbar from "../../components/Navbar";
export default function Portfolio() {

    return (



        <Container className="background">
            
            <Navbar />
            
           
            <Row id= "portfolio">
                {/* <Col >
                <Fade left>
                    <Profile />
                    </Fade>
                </Col> */}
                <Col style={{display:"flex" , alignItems: "center"}} >
                <Fade right>
                  <About/>
                  </Fade>
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row id="projects">
                
                <Col>
                <Fade left>
                <h2 className="d-flex justify-content-center">Projects</h2>
                </Fade>
                </Col>
                
            </Row>
            <hr className="rounded" />
            <Row>
                <Col>
                <Fade left>
                <Card style={{maxHeight: 15000}}><Project9/></Card>
                </Fade>
                </Col>
                <Col>
                <Fade right>
                <Card style={{maxHeight: 15000}}><Project1/></Card>
                </Fade>
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row>
                <Col>
                <Fade left>
                <Card style={{maxHeight: "15000px"}}><Project2/></Card>
                </Fade>
                </Col>
                <Col>
                <Fade right>
                <Card> <Project3/></Card>
               </Fade>
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row>
                <Col>
                <Fade left>
                <Card> <Project4/></Card>
                </Fade>
                </Col>
                <Col>
                <Fade right>
                <Card> <Project5/></Card>
                </Fade>
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row>
                <Col  >
                <Fade left>
                <Card ><Project6/></Card>
                </Fade>
                </Col>
                <Col>
                <Fade right>
                <Card><Project7/></Card>
                </Fade>
                 </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row>
                <Col>
                <Fade left>
                <Card><Project8/></Card>
                </Fade>
                </Col>
                <Col>
                <Card style={{display:"none"}}></Card>
                 </Col>
            </Row>
            <br />
            <hr className="rounded" />
            <Row id= "experiences">
                
                <Col >
                <Fade left>
                <h2 className="d-flex justify-content-center">Experiences</h2>
                </Fade>
                </Col>
                
            </Row>
            <hr className="rounded" />
            <Row>
            <Fade right>
               <Experiences/>
               </Fade>
            </Row>

            <br />
            <hr className="rounded" />
            <Row id= "skills">
                
                <Col>
                <Fade left>
                <h2 className="d-flex justify-content-center">Skills</h2>
                </Fade>
                </Col>
                
            </Row>
            <hr className="rounded" />
            <Row>
            <Fade right>
               <Skills/>
               </Fade>
            </Row>

            <br />
            <hr className="rounded" />
            <Row id= "educations">
                
                <Col>
                <Fade left>
                <h2 className="d-flex justify-content-center">Educations</h2>
                </Fade>
                </Col>
                
            </Row>
            <hr className="rounded" />
            <Row>
            <Fade right>
               <Educations/>
               </Fade>
            </Row>
        </Container>

    )
}
