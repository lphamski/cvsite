import React from 'react';
import './About.css';
import {Card, CardDeck} from 'react-bootstrap';
import muster from './muster.jpg';
import slughouse from './slughouse.jpg';

const About = () => {
    return(
        <div className="myContainer">
            <h1 id="about-head">About me</h1>
            <div className="about-col">
                    <h6 id="myIntro">
                        Hello My Name is Leon Pham.  I enjoy coding and the ocean.  I graduated from the University of California, Santa Cruz
                        in June, 2019.  As of now I am actively searching for a full-time position as a Software Engineer. 
                    </h6>
            </div>
            <h1 id="about-head">Projects</h1>
            <CardDeck className="firstDeck">
                
                <Card classNamne="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={muster} />
                    <Card.Body>
                        <Card.Title><h1>Muster</h1></Card.Title>
                        <Card.Text>
                            A native Android app for group organization along with scheduling and login capabilities.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card classNamne="card" style={{ width: '18em' }}>
                    <Card.Img variant="top" src={slughouse} />
                    <Card.Body>
                        <Card.Title><h1>SlugHouse</h1></Card.Title>
                        <Card.Text>
                            A website made for students who have trouble finding housing in Santa Cruz and surrounding areas.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                
            </CardDeck>
        </div>
    );

}

export default About