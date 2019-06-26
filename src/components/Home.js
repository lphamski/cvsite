import React from 'react';
import './Home.css';
import TextLoop from 'react-text-loop';
import DownloadLink from "react-download-link";
import resume from './LPResume.pdf';
import {Button} from 'react-bootstrap';

const Home = () => {
    return(
        <div className="myHomeContainer">
            <div className="myHome">
                <p className="para">Hello World.<br/>
                    My name is Leon Pham.  <br/>
                    I'm a&nbsp;
                     <TextLoop interval={1300} springConfig={{ stiffness: 500, damping: 80 }}>
                        <span className="loopwords">Software Engineer</span>
                        <span className="loopwords">Web Developer</span>
                        <span className="loopwords">Surfer</span>
                        <span className="loopwords">Sci-fi Nerd</span>
                    </TextLoop>
                    .
                </p>
                
            </div>
            
        </div>
    );

}

export default Home