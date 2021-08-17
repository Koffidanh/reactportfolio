import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
import notetakerimag from "../Welcome/image/notetaker.png";
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
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import favicon from '../Welcome/image/favicon.png';

import styled from "styled-components";

// ..
AOS.init();


export default function Welcome() {
    const [paramText, setParamText] = useState("")
    const [randomText, setRandomText] = useState("")

    const text = ["Koffi Danhounsrou", "Freelancer", "Full Stack Web Developer"]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

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

<Header>
<VFX.VFXImg src={favicon} alt="favicon" shader="rgbShift" />
 </Header>
            


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
                        <a a href="https://voyagr.netlify.app/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Kayvonk/voyagr" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Restaurant Roulette</h1>
                    <img src={restaurantimag} alt="restaurantRoulette " />
                    <p>Restaurant Roulette was create for user to decide what
                        restaurant to eat out.</p>
                    <Button>
                        <a href="https://johnsonr84.github.io/restaurant-roulette/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/johnsonr84/restaurant-roulette" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>


                <Wrap>
                    <h1>Work Planner</h1>
                    <img src={workplannerimag} alt="Work planner" />
                    <p>Work Planner was created to help the user plan his/her daily work
                        schedule.</p>
                    <Button>
                        <a href="https://koffidanh.github.io/workplanner/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/workplanner" target="_blank" rel="noopener noreferrer">View Code</a>
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
                        <a href="https://koffidanh.github.io/weather-tracker/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/weather-tracker" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Coding Quiz</h1>
                    <img src={codequizimag} alt="code quiz " />
                    <p>This Coding Quiz was created to test the user Knowledge on Web Development content.</p>
                    <Button>
                        <a href="https://koffidanh.github.io/coding-quiz/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/coding-quiz" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>


                <Wrap>
                <h1>Note Taker</h1>
                    <img src={notetakerimag} alt="note taker" />
                    <p>This 'Note Taker' was created to generate to help the user to organize his /her daily life or work.</p>
                    <Button>
                        <a  href=" https://limitless-hamlet-20887.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/note-taker" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>


                </Wrap>


            </Projects1>


            <Projects1>

                <Wrap>
                    <h1>Password Generator</h1>
                    <img src={passwordgeneratorimag} alt="password generator" />
                    <p>This Password Generator was created to generate a high security password.</p>
                    <Button>
                        <a href="https://koffidanh.github.io/password-generator/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/password-generator" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>



                <Wrap>
                    <h1>Burger Logger</h1>
                    <img src={burgerloggerimag} alt="burger logger " />
                    <p>This 'Burger Logger ' was created to log in your favorite burger that you wish to eat.</p>
                    <Button>
                        <a href="https://rhubarb-surprise-45818.herokuapp.com/" target="_blank" rel="noopener noreferrer" >Demo</a>
                    </Button>
                    <Button>
                        <a href="https://github.com/Koffidanh/burger" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>
                </Wrap>


                <Wrap>
                    <h1>JobAid</h1>
                    <img src={jobaidimag} alt="jobaid" />
                    <p>JOBAID was created to increase revenue for small to medium sized businesses.</p>
                    <Button>
                        <a href=" https://whispering-eyrie-33529.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a>
                    </Button>
                    <Button>
                        <a  href="https://github.com/Koffidanh/job-aid" target="_blank" rel="noopener noreferrer">View Code</a>
                    </Button>


                </Wrap>


            </Projects1>



            <SkillContainer>
                <Skills>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        transitionDuration={500}
                       
                        autoPlaySpeed={1000}
                    >
                        <WrapSkill>
                            <img src={reactimag} alt="reacy" />
                        </WrapSkill>

                        <WrapSkill>
                            <img src={htmlimag} alt="html" />
                        </WrapSkill>

                        <WrapSkill>
                        <img src={cssimag} alt="css" />
                        </WrapSkill>

                        <WrapSkill>
                        <img src={jsimag} alt="js" />
                        </WrapSkill>

                        <WrapSkill>
                        <img src={nodeimag} alt="node" />
                        </WrapSkill>

                    </Carousel>



                </Skills>
            </SkillContainer>
            <ContactTitle>
                <h2> Contact Me</h2>
            </ContactTitle>


            <ContactContainer>


                <Contact>
                    <a className="navbar-brand" href="https://www.linkedin.com/in/boris-koffi-danhounsrou-59556955" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Upwork" /> </a>
                </Contact>

                <Contact>
                    <a className="navbar-brand" href="https://github.com/Koffidanh" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /> </a>
                </Contact>

                <Contact>
                    <a className="navbar-brand" href="https://docs.google.com/document/d/1LqsMnv28NT_4O33mllLMQuPTg7sjhfu-JVKnQi9Ndo0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" ><img src={download} style={{width:"50px"}} alt="download" /> </a>
                </Contact>

                <Contact>
                <a className="navbar-brand" href="mailto: koffi.danh@gmail.com" target="_blank" rel="noopener noreferrer" >  <FontAwesomeIcon icon={faPaperPlane} size="2x"   alt="email"/> </a>
                </Contact>
            </ContactContainer>


        </Container>
    )
}

const Container = styled.div`
h1 {
    color: black;
}
h2 {
    color: black;
    background-color: #F5E900;
    height: 50px;

}
min-height: calc(100vh );
padding: 0 calc(3.5vw + 5px);
content-align:fit;
background-color: #99ffcc;
position: absolute;
padding-bottom: 100px;
position: relative;
overflow-x: hidden;

`


const Span = styled.div`
position: relative;
width: 100%;
height: calc(100vh - 10vh );

bold: border;
font-size: 30px;
top: 300px;


text-align: center;

`
const ProjectTitle = styled.div`

text-align: center;

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
margin-top: 70px;
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
    color:black;
    font-weight: bold;
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
margin-top: 80px;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;

width: 400vw;
    height: 30vh;
    overflow: visible;

img {
    width: 30%;
    height: 100%;
    object-fit: contain;
    filter: invert(100%)
   

}
`

const SkillContainer = styled.div`
position: relative;
padding-right: 0;
padding-left: 0:
// top: 100px;
min-height: calc(1vh );
//background-color: #0984E3 ;
width: 100vw;
padding-bottom: 30px;
margin-top: 100px;
overflow: visible;
`

const ContactContainer = styled(SkillContainer)`
margin-top: 30px;
display: grid;
grid-gap: 300px;
grid-template-columns: repeat(4, minmax(0, 1fr));
display: flex;
// padding-left: auto;
// padding-right: auto;
width: 100%;
height: 30vh;
margin-top: 10px;
flex-wrap: wrap;
align-content: center;
background-color: #EEEEEE;




`

const Contact = styled(Skills)`
height: 100px;
width: 100px;
border-radius: 10px;
cursor: pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
padding-bottom: 10px;

display: flex;
// padding-left: auto;
// padding-right: auto;
content-align: center;
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
`

const ContactTitle = styled.div`
h2 {
    text-align: center;

}

`
const WrapSkill = styled(Wrap)`
padding-top: 30px;
padding-right: 10px;
height: 50vh;
`

const Header = styled(Container)`
min-height: 1vh;
min-width: 100%;
background-color: blue;
display: grid;
padding: 30px 0px 26px;
grid-gap: 25px;
padding-right: 0:
grid-template-columns: repeat(2, minmax(0, 1fr));
img {
    
    width: 75px;
    height: 100%;
    object-fit: contain;
   

}

`