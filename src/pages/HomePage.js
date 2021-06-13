import React from 'react';
// import {faEnveloppe} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import Typewriter from 'react-simple-typewriter'

function HomePage() {
    return(
        <div className='HomePage' id='home'>
            <header className='header'>
                <p className='para-text-1'>
                    <span>
                    <Typewriter
                        loop
                        cursor
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Bienvenue !','Developpeur Web !', 'FullStack !', ' Mes projets', 'Mes expériences']}
                    />
                    </span>
                </p>
                <div className='icons'>
                    <Link className="icon-link">
                    <FontAwesomeIcon icon={faGithub} className="icon github" />
                    </Link>
                    <Link className="icon-link">
                    <FontAwesomeIcon icon={faLinkedin} className="icon link" />
                    </Link>
                    <Link className="icon-link">
                    <i class="far fa-envelope"></i>
                    </Link>
                </div>
            </header>
        </div>
    )
    
}
export default HomePage;