import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project5 from "../PasswordGenerator/generatepassword.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();

export default function PasswordGenerator() {
    return (
        <Container>
<NavbarBack/>
            <Row>
                <Col>
                    <Col> <img src= {project5} width=" 100%" height=" 100%"
                        
                        alt="Password Generator page" />
                    <p>Password Generator welcome Page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>This Password Generator was created to generate a high security password. This password need to
                    generate password using multiples characters such as Upper letters, Lower letters, Numeric numbers,
                    And Special characters.
            </p>
                    <p>
                    All the user needs to answer the enter the number of characters he/she wanted, and answers to some
                    prompt questions about the characters.
            </p>
                    <p>Tools used were Bootstrap, JavaScript, CSS.</p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/password-generator" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://koffidanh.github.io/password-generator/" target="_blank" rel="noopener noreferrer">Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
