import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project7 from "../JobAid/jobaid.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function JobAid() {
    return (
        <Container>

            <Row>
                <Col>
                    <Col> <img src= {project7} width=" 100%" height=" 100%"
                        
                        alt="JobAid page" />
                    <p>JobAid welcome Page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>JOBAID was created with the purpose of increasing revenue for small to medium sized contracting
                    businesses through: Better record keeping, Accessible customer information for increased follow-up contact, Increasing ROI on advertising by tracking lead source
            </p>
                    <p>
                    All the user needs to do is set up a login account and login then add customers and jobs.
            </p>
                    <p>Tools used were Bootstrap, JavaScript, CSS, Sequelize, MySQL, Handlebars, Express and Heroku. </p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/job-aid" target="_blank" > Repo </a></li>
                    <li><a href=" https://whispering-eyrie-33529.herokuapp.com/" target="_blank" >Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
