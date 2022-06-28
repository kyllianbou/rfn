import React from "react";
import '../css/panier.css';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Panier = () => {
    return (
        <>
            <section className="panier">
                <Nav />
                <article className="panier_container">
                    <h2>Mes achats</h2>
                    <ul className="panier_list">
                        <li>
                            <img className="item_img" src='https://picsum.photos/200' alt="item" />
                            <div className="item_txt">
                                <h3>Item 1</h3>
                                <p>Description bla bla bla bla</p>
                                <p className="item_prix">199,99 €</p>
                            </div>
                            <div className="statut">
                                <h3>Statut :</h3>
                                <p className="refuse">Refusé</p>
                            </div>
                        </li>
                        <li>
                            <img className="item_img" src='https://picsum.photos/200' alt="item" />
                            <div className="item_txt">
                                <h3>Item 2</h3>
                                <p>Description bla bla bla bla</p>
                                <p className="item_prix">199,99 €</p>
                            </div>
                            <div className="statut">
                                <h3>Statut :</h3>
                                <p className="en_attente">En attente</p>
                            </div>
                        </li>
                        <li>
                            <img className="item_img" src='https://picsum.photos/200' alt="item" />
                            <div className="item_txt">
                                <h3>Item 3</h3>
                                <p>Description bla bla bla bla</p>
                                <p className="item_prix">199,99 €</p>
                            </div>
                            <div className="statut">
                                <h3>Statut :</h3>
                                <p className="valide">Validé</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Panier;