import React, { useState, useEffect } from "react";
import Scroll from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { VFXSpan } from 'react-vfx';
import * as VFX from 'react-vfx';
import voyagrimag from "../Welcome/image/voyagr-background.png";
import restaurantimag from "../Welcome/image/project1.png";
import workplannerimag from "../Welcome/image/workplanner.png";
import weathertrackerimag from "../Welcome/image/weathertracker.png";
import codequizimag from "../Welcome/image/codingquiz1.png";
import passwordgeneratorimag from "../Welcome/image/generatepassword.png";
import burgerloggerimag from "../Welcome/image/burger.png";
import jobaidimag from "../Welcome/image/jobaid.png";
import reactimag from "../Welcome/Skills/react.png";
import htmlimag from "../Welcome/Skills/html5.png";
import cssimag from "../Welcome/Skills/CSS3.png";
import jsimag from "../Welcome/Skills/jav.png";
import nodeimag from "../Welcome/Skills/node.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import upwork from "../Network/upwork.png"
import download from "../Welcome/image/download.png"
import linkedin from '../Welcome/image/linkedin.png'
import github from '../Welcome/image/github.png'

import styled from "styled-components";

// ..
AOS.init();


export default function Welcome() {
    const [paramText, setParamText] = useState("")
    const [randomText, setRandomText] = useState("")

    const text = ["Koffi Danhounsrou", "Freelancer", "Full Stack Web Developer"]


    function textChange() {
        for (let i = 0; i <= text.length; i++) {
            const randomText = text[i]


        }
    }

    setTimeout(
        textChange()


        , 5000)


    useEffect(() => {

    }, [])


    return (
        <Container >

            {/* <img src={image}/> */}


            <Span>
                Hello, I am Koffi Danhounsrou, I am Web Developer
            </Span>




            <ProjectTitle>
                <h2>Recent Projects</h2>
            </ProjectTitle>

            <Projects1>

                <Wrap>
                    <h1>Voyagr</h1>
                    <img src={voyagrimag} alt="voyagr" />
                    <p>This 'Voyagr' was created for user to record their travel.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Restaurant Roulette</h1>
                    <img src={restaurantimag} alt="restaurantRoulette " />
                    <p>Restaurant Roulette was create for user to decide what
                        restaurant to eat out.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>


                <Wrap>
                    <h1>Work Planner</h1>
                    <img src={workplannerimag} alt="Work planner" />
                    <p>Work Planner was created to help the user plan his/her daily work
                        schedule.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>




            </Projects1>

            <Projects1>

                <Wrap>
                    <h1>Weather Tracker</h1>
                    <img src={weathertrackerimag} alt="weather tracker" />
                    <p>This Weather Tracker was created to help the user plan his/her trip
                        around world.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Coding Quiz</h1>
                    <img src={codequizimag} alt="code quiz " />
                    <p>This Coding Quiz was created to test the user Knowledge on Web Development content.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>


                <Wrap>
                    <img src={voyagrimag} alt="voyagr" />
                    <p>dgdfsgdfgdsf</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>


                </Wrap>


            </Projects1>


            <Projects1>

                <Wrap>
                    <h1>Password Generator</h1>
                    <img src={passwordgeneratorimag} alt="password generator" />
                    <p>This Password Generator was created to generate a high security password.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Burger Logger</h1>
                    <img src={burgerloggerimag} alt="burger logger " />
                    <p>This 'Burger Logger ' was created to log in your favorite burger that you wish to eat.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>


                <Wrap>
                    <h1>JobAid</h1>
                    <img src={jobaidimag} alt="jobaid" />
                    <p>JOBAID was created to increase revenue for small to medium sized businesses.</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>


                </Wrap>


            </Projects1>



            <SkillContainer>
                <Skills>

                    <img src={reactimag} alt="reacy" />



                    <img src={htmlimag} alt="html" />



                    <img src={cssimag} alt="css" />


                    <img src={jsimag} alt="js" />


                    <img src={nodeimag} alt="node" />





                </Skills>
            </SkillContainer>
<ContactTitle>
<h1> Contact Me</h1>
</ContactTitle>

            
            <ContactContainer>
                

                <Contact>
                    <a className="navbar-brand" href="https://www.linkedin.com/in/boris-koffi-danhounsrou-59556955" target="_blank" rel="noopener noreferrer"><img src={linkedin}  alt="Upwork" /> </a>
                </Contact>

                <Contact>
                    <a className="navbar-brand" href="https://github.com/Koffidanh" target="_blank" rel="noopener noreferrer"><img src={github}  alt="github" /> </a>
                </Contact>

                <Contact>
                    <a className="navbar-brand" href="https://docs.google.com/document/d/1FlrnGU9Q_zsd8MRHkEKsnp7o1aW422_ME6vCmK0OKj0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" ><img src={download}  alt="download" /> </a>
                </Contact>


            </ContactContainer>


        </Container>
    )
}

const Container = styled.div`

min-height: calc(100vh );
padding: 0 calc(3.5vw + 5px);
content-align:fit;
background-color: blue;
position: absolute;
padding-bottom: 100px;

`


const Span = styled.div`
width: 100%;
height: calc(100vh - 10vh );
display:flex;
content-align: center;
bold: border;
font-size: 30px;
top: auto;
bottom: auto;
display:flex;
`
const ProjectTitle = styled.div`

`



const Wrap = styled.div`
height: auto;
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
padding-bottom: 30px;
margin-top: 40px;
h1 {
    top: 10px;
    font-size: 30px;
    margin-bottom: 0px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
   

}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}

p {
    font-size: 20px;
    color: white;
}
`
const Projects1 = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(3, minmax(0, 1fr));
`
const Button = styled.button`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;
margin-right: 50px;

p {
    height: 10px;
}
`

const Skills = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img {
    width: 55%;
    height: 55%;
    object-fit: contain;
   

}
`

const SkillContainer = styled.div`
position: relative;
padding-right: 0;
padding-left: 0:
top: 100px;
min-height: calc(1vh );
// background-color: white;
width:calc(100vw );
padding-bottom: 30px;
margin-top: 40px;

`

const ContactContainer = styled(SkillContainer)`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(3, minmax(0, 1fr));


`

const Contact = styled(Skills)`
height: auto;
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
padding-bottom: 30px;
margin-top: 40px;
align-content: center;
display: flex;
img {
    
    width: 20%;
    height: 100%;
    object-fit: contain;
   

}

&:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}
`

const ContactTitle = styled.div`
h1 {
    text-align: center;

}

`