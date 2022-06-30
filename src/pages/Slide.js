import React from 'react';
import '../css/slide.css';
import Nav from '../components/nav';
import { NavLink } from 'react-router-dom';
import Basket from '../components/Basket';
import Footer from '../components/Footer'

const Slide = () => {

    function ActiveClick(e) {
        let active = document.getElementsByClassName('actif');

        active[0].classList.remove('actif');
        e.target.classList.add('actif');
    }

    return (<>
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
                    <a className='number three' href="#galerie" onClick={ActiveClick}>3</a>
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
            <div className="slide" id="galerie">
                <h1>Partenaire</h1>
                <NavLink to="/galerie" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
            <div className="slide" id="contact">
                <h1>Contact</h1>
                <NavLink to="/contact" className='link-item'><button>VOIR PLUS</button></NavLink>
            </div>
        
        </div>
        <div className="item-grids">
                            <div className="grid__item left">
                                <img className="imagess" src="./images/image_rfn6.jpg" alt="kayak"></img>
                            </div>
                            <div className="grid__item d-flex right">
                                <h2>Kayak polo</h2>
                                <p>Lorem ipsum dolor sit amet,s elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <div to="/Kayak" className='link-item'>
                                    <button className='btn_clair'>En savoir plus</button>
                              </div>
                            </div>
                        </div>
                        <div className='leder' >
                            <h2>Actualités et Activités</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </div>
                        <Footer/>
        </>
    )
}

export default Slide;