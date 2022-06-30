import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);



    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <NavLink to="/" className='brand'>ckcg avion</NavLink>
                <ul className='nav-links'>
                        <li><NavLink to="/" className='link-item'>accueil</NavLink></li>
                        <li><NavLink to="/Club" className='link-item'>qui somme nous</NavLink></li>
                        <li><NavLink to="/Services" className='link-item'>Actualite</NavLink></li>
                        <li><NavLink to="/Galerie" className='link-item'>Partenaire</NavLink></li>
                        <li><NavLink to="/Contact" className='link-item'>contact</NavLink></li>
                </ul>

            </nav>
            <Menu className='burger'>
                <nav>
                    <NavLink to="/" className='brand'>ckcg avion</NavLink>
                    <ul className='nav-links'>
                        <li><NavLink to="/" className='link-item'>accueil</NavLink></li>
                        <li><NavLink to="/Club" className='link-item'>qui somme nous</NavLink></li>
                        <li><NavLink to="/Services" className='link-item'>Actualite</NavLink></li>
                        <li><NavLink to="/Galerie" className='link-item'>Partenaire</NavLink></li>
                        <li><NavLink to="/Contact" className='link-item'>contact</NavLink></li>
                    </ul>
                </nav>
            </Menu>
        </>
    );
};

export default Nav;