import React from 'react';
import '../css/Nav.css';

const Nav = () => {
 
    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <NavLink to="/" className='brand'>ckcg avion</NavLink>
                <ul className='nav-links'>
                    <li><NavLink to="/" className='link-item'>accueil</NavLink></li>
                    <li><NavLink to="/Club" className='link-item'>association</NavLink></li>
                    <li><NavLink to="/Services" className='link-item'>services</NavLink></li>
                    <li><NavLink to="/Galerie" className='link-item'>galerie</NavLink></li>
                    <li><NavLink to="/Contact" className='link-item'>contact</NavLink></li>
                </ul>

            </nav>
           
        </>
    );
    };

export default Nav;