import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project1 from "../RestaurantRoulette/project1.png";
import project1result from "../RestaurantRoulette/project1result.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();
export default function RestaurantRoulette() {
    return (
        <Container>
            <NavbarBack />
            <Row>
                <Col>
                    <Col> <img src={project1} width=" 100%" height=" 100%"

                        alt="restaurant roulette first page" />
                        <p>Restaurant Roulette first page</p></Col>

                    <hr className="rounded" />

                    <Col><img src={project1result} width=" 100%" height=" 100%"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="restaurant roulette result page" />
                        <p>Restaurant Roulette result page</p></Col>

                </Col>

                <Col>
                    <p>Restaurant Roulette was designed to help user to decide what restaurant he/she should eat at. This app was designed to be a phone first application and web.
                    </p>
                    <p>
                        All the User has to do is to insert his/her zip code, what types of cuisine he/she like to eat and how far he/she is willing to drive.
                    </p>
                    <p>Tools used were Bulma, Jquery, CSS, Zippopotamus API, Zomato API, and Google Maps API. </p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/johnsonr84/restaurant-roulette" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://johnsonr84.github.io/restaurant-roulette/" target="_blank" rel="noopener noreferrer">Deploy</a></li>

                </Col>






            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
