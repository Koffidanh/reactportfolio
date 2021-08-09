import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project9 from "../Voyagr/voyagr-background.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();

export default function Voyagr() {
    return (
        <Container>
<NavbarBack/>
            <Row>
                <Col>
                    <Col> <img src= {project9} width=" 100%" height=" 100%"
                        
                        alt="weather tracker page" />
                    <p>Voyagr page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>This "Voyagr" was created to help the user to record his/her trip around world.  
            </p>
                    <p>
                    All the user needs to do is to pin point his/her location and post images and comments. 
            </p>
                    <p>Tools used were MapBox, React-Map-GL, React-Hook-Form, Cloudinary, Auth0, Heroku, MongoDB,Netlify . </p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Kayvonk/voyagr" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://voyagr.netlify.app/" target="_blank" rel="noopener noreferrer">Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
