import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project6 from "../BurgerLogger/burger.png";
import NavbarBack from '../NabarBack';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function BurgerLogger() {
    return (
        <Container>
 <NavbarBack />
            <Row>
                <Col>
                    <Col> <img src= {project6} width=" 100%" height=" 100%"
                        
                        alt="Password Generator page" />
                    <p>Burger Logger welcome Page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>This 'Burger Logger ' was created using MySQL, Node , Express, Handlebars and a ORM. It was created
                    to log in your favorite burger that you wish to eat and then devours it after you ate one in really
                    life.
            </p>
                    <p>
                    All the user needs to do is enter the burgers name and click devoured button after they have tried the burger.
            </p>
                    <p>Tools used were Bootstrap, JavaScript, CSS, Orm, MySQL, Handlebars, Express and Heroku.</p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/burger" target="_blank" rel="noopener noreferrer" > Repo </a></li>
                    <li><a href="https://rhubarb-surprise-45818.herokuapp.com/" target="_blank" rel="noopener noreferrer" >Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
