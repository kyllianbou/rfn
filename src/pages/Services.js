import React from "react";
import '../css/services.css';
import Cards from "../components/Card";
import { Location } from "../components/Location";
import Footer from "../components/footer";
import Nav from "../components/nav";
import Basket from '../components/Basket';

const Services = () => {
    return (
        <div className="services">
            <Basket />
            <Nav />
            <header className="services_header">
                <h1>Actualite</h1>
            </header>
            <article>
          
                <hr></hr>
                <section className="services_locations">
                    <h2>Nos produits à louer</h2>
                    <article className="liste_container">
                        <ul className='liste_locations'>
                    
                        </ul>
                    </article>
                </section>
                <hr></hr>
                <section id="services_prestations">
                    <section className="Kayak">
                    <div className="container">
                        <div className="item-grid">
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
                    </div>
                </section>
                </section>
            </article>
            <Footer />
        </div>
    )
}

export default Services;