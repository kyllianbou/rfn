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
                <h1>Partenaire</h1>
            </div>
            <div className="bod">
                <h2>Pourquoi s’engager avec les réseau des femmes Nigeriennes ?</h2>
                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</li>
                    <li>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</li>
                    <li>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</li>
                    <li>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default Galerie;