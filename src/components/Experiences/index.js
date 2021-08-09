import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "../Portfolio/index"
export default function Experiences() {

    return (

        <Container className="background">
            <Row >
                <Col >
               
                <div className="card" >
                    <div className="container telcomcss" style={{height: 460}}>
                        <p style={{fontWeight: "bold"}}>woodman Telcom Group (2021)</p>
                        <p style={{fontWeight: "bold", fontFamily: "sans-serif"}}> Salt Lake City , UT</p>
                        <p style={{fontWeight: "bold", fontFamily: "cursive", fontSize: 20}}>AutoCad Drafter </p>
                        <li style={{fontSize: 18}}>Created the land base of a map using the tools in Autocad.</li>
                        <li style={{fontSize: 18}}> Located existing structures on land base maps from as built drawings and notes from field
                            technicians.
                        </li>
                       

                    </div>
                </div>
                </Col>
                <Col >
                <div className="card" >
                    <div className="container intermountaincss" style={{height: 460}}>
                        <p style={{fontWeight: "bold"}}>Intermountain Healthcare (2019-2020)</p>
                        <p style={{fontWeight: "bold", fontFamily: "sans-serif"}}> Salt Lake City , UT</p>
                        <p style={{fontWeight: "bold", fontFamily: "cursive", fontSize: 20}}>CAD Drafter Sr</p>
                        <li style={{fontSize: 18}}>Created an allocated plotline to each room of the hospital and medical office.</li>
                        <li style={{fontSize: 18}}> And then used the planon
                            software to determine how much footage of the hospital or medical office is being rented out
                            to each
                            department.</li>
                        <li style={{fontSize: 18}}>Also clean up the architecture plan to be put on Planon.</li>

                    </div>
                </div>
                </Col>
            </Row>
            <br></br>
            <Row >
                <Col>
                <div class="card" >
                    <div class="container byerscss" style={{height: 460}}>
                        <p style={{fontWeight:"bold"}}>Byers Engineering Company (2017-2019)</p>
                        <p style={{fontWeight: "bold", fontFamily: "sans-serif"}}> Taylorsville , UT</p>
                        <p style={{fontWeight: "bold", fontFamily: "cursive", fontSize: 20}}>CAD Drafter</p>
                        <li style={{fontSize: 18}}>Created the land base of a map using the tools in Autocad.</li>
                        <li style={{fontSize: 18}}> Located existing structures on land base maps from as built drawings and notes from field
                            technicians.
                        </li>
                        <li style={{fontSize: 18}}>Created permit drawings for underground fiber optic cable segments in multiple jurisdictions
                            near Sacramento and Los Angeles including sets for city, county, CALTRANS, and flood
                            control.</li>
                        <li style={{fontSize: 18}}>Converted permit drawings to construction drawings.</li>
                    </div>
                </div>
               
                </Col>
                <Col>
               
                </Col>
            </Row>
            <br />
            <hr className="rounded" />
           
             
        </Container>

    )
}
