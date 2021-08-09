import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project4 from "../CodingQuiz/codingquiz1.png";
import AOS from 'aos';
import NavbarBack from '../NabarBack';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function CodingQuiz() {
    return (
        <Container>
            <NavbarBack />
            <Row>
                <Col>
                    <Col> <img src={project4} width=" 100%" height=" 100%"

                        alt="work planner page" />
                        <p>Coding Quiz page</p></Col>

                    <hr className="rounded" />



                </Col>

                <Col>
                    <p>This Web Development Quiz was created to test the user Knowledge on Web Development content. This
                        quiz is developed to present five questions through a loop showing a question with four multiples
                        answers to choose from.At the end of the quiz, the user is required to enter their initial be stored
                        the result. The result could be viewed from the " View Highscores" button at the top left corner of
                        the web.
                    </p>
                    <p>
                        All the user needs to answer the questions, then putting his/her initial.
                    </p>
                    <p>Tools used were Bootstrap, JavaScript, CSS.</p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/coding-quiz" target="_blank" > Repo </a></li>
                    <li><a href="https://koffidanh.github.io/coding-quiz/" target="_blank" >Deploy</a></li>

                </Col>






            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
