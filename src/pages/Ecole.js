import React from 'react';
import '../css/ecole.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Contact = () => {
    return (
        <><div id='headder'>
            <Nav />
            <h1>Ecole de Pagaie</h1>
        </div>
            <article id='ecole_pagaie'>
                <section className='description'>
                    <h2>Présentation</h2>
                    <p>Lorem ipsum dolor sit amet,g nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit</p>
                </section>
                <h2 id='color'>Les rangs</h2>
                <section id='rangs'>
                    <img src='images/debut.png' alt='photo de pagaie' />
                    <img src='images/fin.png' alt='photo de pagaie' />
                </section>
            </article>
            < Footer />
        </>
    );
}
export default Contact;