import React from "react";
import '../css/services.css';
import Cards from "../components/Card";
import { Location } from "../components/Location";
import { Prestation } from "../components/Prestation";
import CardsP from "../components/CardP";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Basket from '../components/Basket';

const Services = () => {
    return (
        <div className="services">
            <Basket />
            <Nav />
            <header className="services_header">
                <h1>Nos services</h1>
            </header>
            <article>
                <section className="services_presentation">
                    <h2>Présentation</h2>
                    <p className="services_txt">Lorem ipsum dolor sit amet. Ut possimus omnis in saepe consectetur ut quidem galisum est alias. Est quos voluptatum ut assumenda velit et optio aspernatur sed temporibus ipsum. Aut voluptatem molestias aut temporibus Quis et aliquam temporibus. Et perspiciatis odit et voluptatem fugit et sint galisum ut quia nihil aut iste minus et nobis eligendi sed tempora beatae? Est vero minus vel sint enim est maxime nisi id officia officia sit accusantium placeat in voluptates voluptatem quo veritatis ipsa.</p>
                </section>
                <hr></hr>
                <section className="services_locations">
                    <h2>Nos produits à louer</h2>
                    <article className="liste_container">
                        <ul className='liste_locations'>
                        {Location.map((kayak, index) => (
                        <Cards key={index} kayak={kayak} />
                    ))}
                        </ul>
                    </article>
                </section>
                <hr></hr>
                <section id="services_prestations">
                    <h2>Prestations encadrées</h2>
                    <article id="liste_container">
                        <ul id="liste_locations">
                        {Prestation.map((prestation, index) => (
                        <CardsP key={index} prestation={prestation} />
                    ))}
                        </ul>
                    </article>
                </section>
            </article>
            <Footer />
        </div>
    )
}

export default Services;