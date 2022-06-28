import React from "react";

const CardsP = ({ prestation }) => {

    let Default;

    function Hover(e) {
        Default = e.target.innerHTML;
        e.target.innerHTML = "Ajouter au panier";
    }

    function HoverLeave(e) {
        e.target.innerHTML = Default;
    }


    return (
        <li className="card" id="#card">
            <img src={prestation.image} alt={"aperçu " + prestation.nom} />
            <div className="infos" id="infos">
                <h3 id="titre_pack">{prestation.nom}</h3>
                <p>{prestation.description}</p>
                <button className='btn_prix' onMouseEnter={Hover} onMouseLeave={HoverLeave}>{prestation.prix + " €"}</button>
            </div>
        </li>
    )
}

export default CardsP;