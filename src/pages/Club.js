import "../css/club.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Club = () => {

    return (
        <>
            <Nav />
            <div className="club">
                <section id="wallpaper">
                    <h1>Le Club</h1>
                </section>
                <section className="presentation">
                    <div className="container">
                        <div className="item-grid d-flex">
                            <h2 className="title">Présentation</h2>
                            <p>Lorem ipsum dolor sit amet,g nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit</p>
                        </div>
                    </div>
                </section>
                <section className="ecole">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item">
                                <img src="./images/kaya-img.png" alt='kayak'></img>
                            </div>
                            <div className="grid__item d-flex">
                                <h2>Ecole de pagaie</h2>
                                <p>Lorem ipsum dolor sit amet,um ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <NavLink to="/Ecole" className='link-item'>
                                    <button>En savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Kayak">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item left">
                                <img src="./images/kaya-img.png" alt="kayak"></img>
                            </div>
                            <div className="grid__item d-flex right">
                                <h2>Kayak polo</h2>
                                <p>Lorem ipsum dolor sit amet,s elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <NavLink to="/Kayak" className='link-item'>
                                    <button className='btn_clair'>En savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service">
                    <div className="container">
                        <div className="item-grid">
                            <div className="grid__item">
                                <img src="./images/kaya-img.png" alt='kayak'></img>
                            </div>
                            <div className="grid__item d-flex">
                                <h2>Services</h2>
                                <p>Lorem ipsum dolor sortor,  dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit </p>
                                <NavLink to="/Services" className='link-item'>
                                    <button>En savoir plus</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );



};

export default Club;