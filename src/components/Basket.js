import React from "react";
import '../css/basket.css';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { NavLink } from "react-router-dom";


function MonPanier() {
    let panier = document.getElementsByClassName("txt_panier");
    let basket = document.getElementsByClassName("basket");
    let spin = document.querySelector(".basket svg");

    if (panier[0].className !== 'txt_panier actif') {
        panier[0].classList.remove('non-actif');
        panier[0].classList.add('actif');
        spin.classList.remove('non-actif')
        spin.classList.add('actif');
        basket[0].classList.add('actif');
        basket[0].classList.remove('non-actif');
    }
    else {
        panier[0].classList.remove('actif');
        panier[0].classList.add('non-actif');
        spin.classList.add('non-actif')
        spin.classList.remove('actif');
        basket[0].classList.remove('actif');
        basket[0].classList.add('non-actif');
    }
}

const Basket = () => {


    return (
        <>
            <div className="basket">
                <MdOutlineShoppingBasket onClick={MonPanier} />
                <NavLink className="nav_panier" to="/Panier">
                    <p className="txt_panier">Mon panier</p>
                </NavLink>
            </div>
        </>
    )
}

export default Basket;