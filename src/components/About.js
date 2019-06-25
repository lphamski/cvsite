import React from 'react';
import './About.css';
import {Card, CardDeck} from 'react-bootstrap';


const About = () => {
    return(
        <div className="myContainer">
            <h1 id="about-head">About me</h1>
            <div className="about-col">
                    <p id="myIntro">
                        Hello My Name is Leon Pham.  I enjoy coding and the ocean.  I graduated from the University of California, Santa Cruz
                        in June, 2019.  As of now I am actively searching for a full-time position as a Software Engineer. 
                    </p>
            </div>
            <h1 id="about-head">Projects</h1>
            <CardDeck>
                <Card classNamne="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card classNamne="card" style={{ width: '18em' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </CardDeck>
            
        </div>
    );

}

export default About