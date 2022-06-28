import React from 'react';
import "../css/galerie.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Galerie = () => {
    function setImageVisible(

    ) {
        var img = document.getElementById('thibault');
        img.style.visibility = 'visible';
    }
    return (
        <>
            <Nav />
            <div className='head'>
                <h1>Galerie</h1>
            </div>
            <div className="bod">
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <img src='images/thibault.jpg' alt='Equipe de kayak' />
                <button id="easter" onClick={setImageVisible}>c'est moi Thibault</button>
                <img id='thibault' src='images/thibault_leboss.jpg' alt='thibault' />
            </div>
            <Footer />
        </>
    );
};

export default Galerie;