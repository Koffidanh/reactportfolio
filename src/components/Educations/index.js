import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../Portfolio/index.css"
export default function Educations() {

    return (

        <Container className="background" >
            <Row>
                <Col >
               
                <div className="card " >
                    <div className="container web" style={{height: 200}}>
                    <p font-weight= "bold" >University of Utah | Salt Lake City , UT </p>
                        <p >Grad: May 2021</p>
                        <p >Certificate of Full Stack Web Development</p>

                    </div>
                </div>
                </Col>
                <Col >
                <div class="card " >
                    <div class="container engineering" style={{height: 200}}>
                    <p > University of Utah | Salt Lake City , UT</p>
                        <p font-weight= "bold"> Grad: May 2016</p>
                        <p> Bachelor of Science in Mechanical Engineering (BSME)</p>
                    </div>
                </div>
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
           
             
        </Container>

    )
}
