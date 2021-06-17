import React from 'react';
import avatar from '../img/avatar.jpg';
// import {NavLink} from 'react-router-dom';
import {HashLink  as Link} from 'react-router-hash-link';
function NavBar() {
    return(
        <div className='nav-Bar'>
            <nav className='nav'>
                <div className='profile'>
                    <img src={avatar} alt='' />
                </div>
                <ul className='nav-items'>
                    <li className='nav-item'>
                        <Link to='#home'>
                            Acceuil
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to='#about'>
                            A propos de moi
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#portfolios'>
                            Portfolios
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='#contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <footer className='footer'>
                    <p>@2021 Web@cademy</p>
                </footer>
            </nav>
        </div>
    )
}
export default NavBar;