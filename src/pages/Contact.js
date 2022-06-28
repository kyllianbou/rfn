import React from 'react';
import '../css/contact.css';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Form from '../components/Form';


const Contact = () => {
  return (
    <>
      <Nav />
      <div className='headder'>
        <h1>Contact</h1>
      </div>
      <article className='toto' >
        <section className='art1' >
          <ul className='liste_adresse'>
            <li>
              <h2>Adresse</h2>
            </li>
            <li>
              <p>72 Rue Casimir Beugnet</p>
            </li>
            <li>
              <p>62300 Lens</p>
            </li>
            <li className="lille">
              <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.491786040248!2d2.8332392000000004!3d50.4133083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd30df3fe8f463%3A0xaa611e687c59ceb6!2sPl.%20Jacques%20Duclos%2C%2062210%20Avion!5e0!3m2!1sfr!2sfr!4v1653389902188!5m2!1sfr!2sfr" width="300" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </li>
          </ul>
        </section>
        <section className='art2'>
          <h2>Formulaire de contact</h2>
          <div className='contact'>
            <Form/>
          </div>
        </section>
        <section className='art3'>
          <h2>Horaires</h2>
          <p>Lundi-Vendredi</p>
          <p>08:00-17:00</p>
          <p>Samedi-Dimanche</p>
          <p>13:00-17:00</p>
        </section>
        <section className='art4' >
          <h2>Contact</h2>
          < AiFillPhone />
          <p>06 58 69 06 78</p>
          < AiFillMail />
          <p>benbahlouli.nahim@gmail.com</p>
        </section>
      </article>
      
      <Footer />
    </>
  );
}

export default Contact;