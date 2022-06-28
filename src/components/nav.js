import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';
import { slide as Menu } from 'react-burger-menu';
import { updateCurrentUser } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { useAuth } from "../firebase";

const Nav = () => {
    const currentUser = useAuth();
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

                {!currentUser && <NavLink to="/Login" className='connexion'>FAire un Don</NavLink>}
                {currentUser && <NavLink to="/Profil" className='connexion'>{currentUser?.displayName}</NavLink>}
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
                    {!currentUser && <NavLink to="/Login" className='connexion'>Faire un Don</NavLink>}
                    {currentUser && <NavLink to="/Profil" className='connexion'>{currentUser?.displayName}</NavLink>}
                </nav>
            </Menu>
        </>
    );
};

export default Nav;