import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="sticky">
            <nav className="nav-wrapper black lighten-1">
                <ul className="left">
                    <li><Link to="/"><FontAwesomeIcon icon="home" size="lg" /></Link></li>
                    <li className="nav-words"><NavLink to="/about">About</NavLink></li>
                    <li className="nav-words"><NavLink to="/contact">Contact</NavLink></li>
                    <li>
                        <a href="https://www.linkedin.com/in/phamleon/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/lphamski"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a>
                    </li>
                </ul>  
            </nav>
        </div>
    );
}

export default withRouter(Navbar)