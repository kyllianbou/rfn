import React from "react";

const Cards = ({ kayak }) => {

    let Default;

    function Hover(e) {
        Default = e.target.innerHTML;

        e.target.innerHTML = "Ajouter au panier";
    }

    function HoverLeave(e) {
        e.target.innerHTML = Default;
    }


    return (
        <li className="card">
            <img src={kayak.image} alt={"aperçu " + kayak.nom} />
            <div className="infos">
                <h3>{kayak.nom}</h3>
                <button className='btn_prix' onMouseEnter={Hover} onMouseLeave={HoverLeave}>{kayak.prix + " €"}</button>
            </div>
        </li>
    )
}

export default Cards;