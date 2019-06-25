import React from 'react';
import './Home.css';
import TextLoop from 'react-text-loop';
import DownloadLink from "react-download-link";

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
            <div className="myRes">
                <h5 className="download">Download CV</h5>
            </div>         
        </div>
    );

}

export default Home