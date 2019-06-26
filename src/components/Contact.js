import React, {Component} from 'react';
import './Contact.css';
import { Button} from 'react-bootstrap';
import resume from './LPResume.pdf';
import './Home.css';

class Contact extends Component {

    render(){
        return(
            <div className="myHomeContainer">
                <div className="myEmail">
                    <a href="mailto:Lpham10@ucsc.edu">
                        <h4>Email me at Lpham10@ucsc.edu</h4>
                    </a>
                </div>
                <div className="download">
                    <a href={resume} download> 
                        <Button variant="dark">Download Resume</Button>
                    </a>  
                </div> 
            </div>
        );
    }
}
export default Contact