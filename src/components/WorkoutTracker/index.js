import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import project10 from "../WorkoutTracker/workouttracker.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function workoutTracker() {
    return (
        <Container>

            <Row>
                <Col>
                    <Col> <img src= {project10} width=" 100%" height=" 100%"
                        
                        alt="workoutTracker page" />
                    <p>workoutTracker page</p></Col>
                   
                    <hr className="rounded" />

                    
                    
                </Col>

                <Col>
                <p>his 'Workout Tracker ' was created for the user to record his/her daily workout.
            </p>
                    <p>
                    All thew user got to do is to select the activities he/she want to do. Which is between "cardio" and "Resistance". Then he/she needs to input the name of the workout, set up duration, weight, set, reps and distance if needed.
            </p>
                    <p>Tools used were HTML5, CSS, JAVASCRIPT, EXPRESS, MONGODB, MONGOOSE, INDEXEDDB, BOOTSTRAP</p>
                    <p>Here is the link to the Repo and Deploy. </p>
                    <li><a href="https://github.com/Koffidanh/workout-tracker" target="_blank" rel="noopener noreferrer"> Repo </a></li>
                    <li><a href="https://whispering-inlet-83125.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deploy</a></li>
               
                </Col>



                 
                  

            </Row>



            <hr class="rounded"></hr>
        </Container>
    )
}
