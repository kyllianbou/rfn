import React from 'react';
import "../css/galerie.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

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

                <h3>Ces entreprises qui s’engagent déjà avec le reseau des femmes nigeriennes</h3>
                <div className='entre' >
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> </div></div>
            <h2>Co-construire un partenariat entreprise-association</h2>
            <div className='cartes' >
                <article className='carte1' >
                    <img className='imggg2' src='images/image_rfn3.jpg' alt='Equipe de kayak' />
                    <h4>Ensemble, nous imaginons un partenariat à impact…</h4>
                    <ul>
                        <li>Soutien de projets existants ayant fait leurs preuves</li>
                        <li>Co-construction de projets </li>
                        <li>Développement de projet
</li>
                    </ul>
                </article>
                <article className='carte2' >
                    <img className='imggg1' src='images/image_rfn3.jpg' alt='Equipe de kayak' />
                    <h4>Ensemble, nous imaginons un partenariat à impact…</h4>
                    <ul>
                        <li>Mécénat financier </li>
                        <li>Mécénat de compétences</li>
                        <li>Soutien à nos actions plaidoyer</li>
                    </ul>
                </article></div>
            <Footer />
        </>
    );
};

export default Galerie;