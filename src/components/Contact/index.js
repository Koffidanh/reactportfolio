import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Network from "../Network"
//import Message from "../Message"
//import "../Navbar/style.css";
import ScriptTag from 'react-script-tag';
import "../Portfolio/index"
const Demo = props => (
    <ScriptTag type="text/javascript" src="../Contact/function" />
    )
export default function Contact() {

    return (

        <>
            <Row className="background" >
                <Col xs={6} md={4}>
                   <Network/>
                </Col>
                <Col xs={12} md={8}>
                  {/* <Message/> */}
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
           
        </>

    )
}
