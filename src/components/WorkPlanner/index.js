import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project3 from "../WorkPlanner/workplanner.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import NavbarBack from '../NabarBack';
// ..
AOS.init();

export default function WorkPlanner() {
    return (
        <Container>
<NavbarBack/>
            <Row>
                <Col>
                    <Col> <img src= {project3} width=" 100%" height=" 100%"
                        
                        alt="work planner page" />
                    <p>Work Planner page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>Work Planner was created to help the user plan his/her daily work schedule. This work planner was designed to help the user to organism his/her by inputting the tasks that need to be accomplish by the end of the day.
            </p>
                    <p>
                    All the user needs to do is to save all the different tasks that need to be done in each responsible hour slots. This planner used the typical work hour from 8Am to 5PM. 
            </p>
                    <p>Tools used were Bootstrap, Jquery, CSS, and Moment().js.</p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/workplanner" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://koffidanh.github.io/workplanner/" target="_blank" rel="noopener noreferrer">Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
