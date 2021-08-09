import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project3 from "../WeatherTracker/weathertracker.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();

export default function WeatherTracker() {
    return (
        <Container>
<NavbarBack/>
            <Row>
                <Col>
                    <Col> <img src= {project3} width=" 100%" height=" 100%"
                        
                        alt="weather tracker page" />
                    <p>Weather Tracker page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>This Weather Tracker was created to help the user plan his/her trip around world. This Weather Tracker was designed to help the user to plan his/her trip according to the current weather and future weather. 
            </p>
                    <p>
                    All the user needs to do is to search the city he/she is going. And according to the weather.
            </p>
                    <p>Tools used were Bootstrap, Jquery, CSS, and OpenWeather API. </p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/weather-tracker" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://koffidanh.github.io/weather-tracker/" target="_blank" rel="noopener noreferrer">Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
