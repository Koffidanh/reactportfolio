import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { VFXSpan } from 'react-vfx';
import * as VFX from 'react-vfx';
import voyagrimag from "../Welcome/image/voyagr-background.png";
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
                <p>Voyagr</p>
                    <img src={voyagrimag} alt="" />
                    <p>dgdfsgdfgdsf</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>



                <Wrap>
                    <img src={voyagrimag} alt="voyagr " />
                    <p>dgdfsgdfgdsf</p>
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
                    <img src={voyagrimag} alt="" />
                    <p>dgdfsgdfgdsf</p>
                    <Button>
                        <p>Demo</p>
                    </Button>
                    <Button>
                        <p>View Code</p>
                    </Button>
                </Wrap>



                <Wrap>
                    <img src={voyagrimag} alt="voyagr " />
                    <p>dgdfsgdfgdsf</p>
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
                <SkillContainer>
                    <Skills>

                        safsdgdfdf


                    </Skills>
                </SkillContainer>

            </Projects1>



        </Container>
    )
}

const Container = styled.div`

min-height: calc(100vh );
padding: 0 calc(3.5vw + 5px);
content-align:fit;
background-color: blue;
position: absolute;

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


img {
    width: 100%;
    height: 100%;
    object-fit: cover;

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


`

const SkillContainer = styled(Container)`
position: relative;
padding-right: 0;
top: 100px;
min-height: calc(1vh );
background-color: yellow;
width:calc(100vw );
`