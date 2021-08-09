import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project8 from "../NoteTaker/notetaker.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();

export default function NoteTaker() {
    return (
        <Container>
<NavbarBack/>
            <Row>
                <Col>
                    <Col> <img src= {project8} width=" 100%" height=" 100%"
                        
                        alt="JobAid page" />
                    <p>Note Taker welcome Page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>This 'Note Taker' was created to generate to help the user to organize his /her daily life or work.
            </p>
                    <p>
                    All the user needs to do is sto input their note and save it.
            </p>
                    <p>Tools used were HTML, JavaScript, CSS, Express and Heroku. </p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/note-taker" target="_blank" > Repo </a></li>
                    <li><a href=" https://limitless-hamlet-20887.herokuapp.com/" target="_blank" >Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
