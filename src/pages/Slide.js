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
                    <a className='number four' href="#ecole" onClick={ActiveClick}>4</a>
                </li>
                <li>
                    <a className='number five' href="#contact" onClick={ActiveClick}>5</a>
                </li>
            </ul>
            <div className="slide active" id="asso">
                <h1>L'association</h1>
                <NavLink to="/Club" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="services">
                <h1>Nos services</h1>
                <NavLink to="/Services" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="kayak">
                <h1>Kayak Polo</h1>
                <NavLink to="/Kayak" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="ecole">
                <h1>Ecole de pagaie</h1>
                <NavLink to="/Ecole" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="contact">
                <h1>Nous contacter</h1>
                <NavLink to="/Contact" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
        </div>
    )
}

export default Slide;