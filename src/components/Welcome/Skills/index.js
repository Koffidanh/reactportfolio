import React from "react";
import { Container, Row, Col } from 'reactstrap';
import JavaScript from "../Skills/jav.png"
import html from "../Skills/html5.png"
import css from "../Skills/CSS3.png"
import github from "../Skills/github.png"
import mysql from "../Skills/mysql.png"
import mongodb from "../Skills/mongodb.png"
import express from "../Skills/ExpressJS.png"
import react from "../Skills/react.png"
import bootstrap from "../Skills/bootstrap.png"
import bulma from "../Skills/bulma.png"
import jquery from "../Skills/jquery.jpg"
import node from "../Skills/node.png"
import heroku from "../Skills/heroku.png"
import "../Portfolio/index.css"
export default function Experiences() {

    return (

        <Container className="background" >
            <Row >
            <p style={{textAlign:"center"}}>Languages</p>
            </Row>
            <Row>
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >JavaScript</p>
                        <img src={JavaScript} style={{height:100}} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="javascript" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >HTML5</p>
                        <img src={html} style={{height:100}} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="html5" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
               <div className="card" style={{maxHeight:350}}>
                   <div className="container">
                       <p >CSS3</p>
                       <img src={css} style={{height:100}} 
                       className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                       alt="css3" />
                   </div>
               </div>
               </Col>
               <br />
            <hr className="rounded" />
           
               
            </Row>
            <br />
            <hr className="rounded" />
           
            <Row>
            <p className="d-flex justify-content-center">Applications</p>
            </Row>
            <Row>
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >GitHub</p>
                        <img src={github} style={{height:100}} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="github" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >MySQL</p>
                        <img src={mysql} style={{height:100}} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="mysql" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
               <div className="card" style={{maxHeight:350}}>
                   <div className="container">
                       <p >MongoDB</p>
                       <img src={mongodb} style={{height:100}} 
                       className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                       alt="mongodb" />
                   </div>
               </div>
               </Col>
               <br />
            <hr className="rounded" />
           
               
            </Row>
            <br />
            <hr className="rounded" />
             
            <Row>
            <p className="d-flex justify-content-center">Tools</p>
            </Row>
            <Row>
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >ExpressJS</p>
                        <img src={express} style={{height:65}} 
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="expressjs" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >ReactJS</p>
                        <img src={react} style={{height:65}}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="reactjs" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
               <div className="card" style={{maxHeight:350}}>
                   <div className="container">
                       <p >Bootstrap</p>
                       <img src={bootstrap} style={{height:65}}
                       className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                       alt="bootstrap" />
                   </div>
               </div>
               </Col>
               <Col>
               
               <div className="card" style={{maxHeight:350}}>
                   <div className="container">
                       <p >Bulma</p>
                       <img src={bulma} style={{height:65}}
                       className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                       alt="bulma" />
                   </div>
               </div>
               </Col>
               <br />
            <hr className="rounded" />
           
               
            </Row>
            <br />
            <hr className="rounded" />

            <Row>
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container">
                        <p >JQuery</p>
                        <img src={jquery} style={{height:100}}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="jquery" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
                <div className="card" style={{maxHeight:350}}>
                    <div className="container ">
                        <p >NodeJS</p>
                        <img className=" nodecss" src={node} style={{height:100}}
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="nodejs" />
                    </div>
                </div>
                </Col>
                <br />
            <hr className="rounded" />
                <Col>
               
               <div className="card" style={{maxHeight:350}}>
                   <div className="container">
                       <p >Heroku</p>
                       <img src={heroku} style={{height:100}}
                       className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                       alt="Heroku" />
                   </div>
               </div>
               </Col>
              
               <br />
            <hr className="rounded" />
           
               
            </Row>
            <br />
            <hr className="rounded" />
        </Container>

    )
}
