import React,{useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';

export default function Message() {
const [message, setMessage] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
    return (
        <Container>

            <Row> <h2>Message</h2></Row>

            
                <Row>
                <div className="row gtr-uniform">
                    <div className="col-md-4">
                        <input type="text" name="name" id="name" value="" placeholder="Name" />
                    </div>
                    <div className="col-md-4">
                        <input type="email" name="email" id="email" value="" placeholder="Email" />
                    </div>
                </div>
                </Row>

                <Row>

                <form>
                    <textarea name="demo-message" id="message" placeholder="Enter your message" rows="6"></textarea>
                </form>

                </Row>
                <Row>
                <form>
                    <ul className="actions">
                        <input type="submit" value="Send Message" className="primary" id="sendMessage" />
                        <input type="reset" value="Reset" id="resetMessage" />
                    </ul>
                </form>
                </Row>
        </Container>
    )
}

