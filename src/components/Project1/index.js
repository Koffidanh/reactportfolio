import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project1Image from "../Project1/project1.png";
//import RestaurantRoulette from "../RestaurantRoulette";
import { Link } from "react-router-dom";
import AOS from 'aos';
//import "../Portfolio/index.css"
import "../Project1/index.css"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function Project1() {
    return (
        <Container>

            <Row>
                <Col>
                <Link
              to="/restaurantRoulette"
              className={
                window.location.pathname === "/restaurantRoulette" 
                  
              }
            >
             <h2 >Restaurant Roulette</h2>
            </Link>
                    
                </Col>
            </Row>
            <Row>
                <Col style={{height: 350}}>
                <Link
              to="/restaurantRoulette"
              className={
                window.location.pathname === "/restaurantRoulette" 
                  
              }
            >
              <img src={project1Image} style={{height: 245}}
                        
                        alt="restaurant roulette first page" />
                    {/* <div className="overlay">
                        <div className="text">Tools used were Bulma, Jquery, CSS, Zippopotamus API, Zomato API, and Google Maps API.
                </div>
                    </div> */}
            </Link>
                   
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <p className="d-flex justify-content-center">Restaurant Roulette was create for user to decide what
                    restaurant to eat out
              .</p>
                </Col>
                
            </Row>
        </Container>
    )
}
