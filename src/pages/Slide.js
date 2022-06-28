import React from 'react';
import '../css/slide.css';
import Nav from '../components/Nav';
import { NavLink } from 'react-router-dom';
import Basket from '../components/Basket';

const Slide = () => {

    function ActiveClick(e) {
        let active = document.getElementsByClassName('actif');

        active[0].classList.remove('actif');
        e.target.classList.add('actif');
    }

    return (
        <div className="slide_container">
            <Nav />
            <Basket />
            <ul className="numbers">
                <li>
                    <a className='number one actif' id="number one" href="#asso" onClick={ActiveClick}>1</a>
                </li>
                <li>
                    <a className='number two' href="#services" onClick={ActiveClick}>2</a>
                </li>
                <li>
                    <a className='number three' href="#kayak" onClick={ActiveClick}>3</a>
                </li>
                <li>
                    <a className='number four' href="#contact" onClick={ActiveClick}>4</a>
                </li>
            </ul>
            <div className="slide active" id="asso">
                <h1>Qui Somme Nous</h1>
                <NavLink to="/Club" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="services">
                <h1>Actualite</h1>
                <NavLink to="/Services" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="kayak">
                <h1>Partenaire</h1>
                <NavLink to="/Kayak" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="ecole">
                <h1>Contact</h1>
                <NavLink to="/Ecole" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
        
        </div>
    )
}

export default Slide;