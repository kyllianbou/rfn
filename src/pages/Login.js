import React from 'react';
import Nav from '../components/Nav';
import '../css/login.css';
import {signup,login, useAuth} from "../firebase"
import {useRef,useState} from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emaiConnexionRef = useRef();
    const passwordConnexionRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const nom = useRef();
    const prenom = useRef();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");


    async function handleSignup() {
        setLoading(true);
        try{
        await signup(emailRef.current.value,passwordRef.current.value,nom.current.value,prenom.current.value);
        navigate("/");
        }catch(err){
            setErrorMsg(err.message);
        }
        setLoading(false);
    } 

    async function handleLogin(){
        setLoading(true);
        try{
        await login(emaiConnexionRef.current.value,passwordConnexionRef.current.value);
         navigate("/");
        }catch(err){
        
            setErrorMsg(err.message)
        }
        setLoading(false);
    }


    return (
        <div className='login'>
            <Nav />
          <div className="box">
              <div>{currentUser?.displayName}</div>
              <article>
              <h2>CONNEXION</h2>
                  <input ref={emaiConnexionRef} type="email" placeholder='adresse@mail.com' />
                  <input ref={passwordConnexionRef}  type="password" placeholder='Mot de passe' />
                  <b className="error">{errorMsg}</b>
                  <button disabled={ loading || currentUser} onClick={handleLogin}>Connexion</button>
                  <div className="resaux-sociaux">
                  <a href='https://facebook.com'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='https://twitter.com'><i className="fa-brands fa-twitter"></i></a>
                  <a href='https://instagram.com'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://tiktok.com'><i className="fa-brands fa-tiktok"></i></a>
                  </div>
              </article>
              <span className="trait"></span>
              <article>
                  <h2>INSCRIPTION</h2>
                  <input ref={nom} type="text" placeholder='Nom' />
                  <input ref={prenom} type="text" placeholder='Prénom' />
                  <input ref={emailRef} type="email" placeholder='adresse@mail.com' />
                  <input ref={passwordRef} type="password" placeholder='Mot de passe' />
                  <input type="password" placeholder='Confirmer Mot de passe' />
                 <label htmlFor="checkbox">J'accepte <a href='#test'>les conditions d'utilisations</a> </label>
                 <input type="checkbox" className='check-me'/>
                  <button disabled={ loading || currentUser} onClick={handleSignup}>Inscription</button>
                  <div className="resaux-sociaux insc">
                  <a href='https://fr-fr.facebook.com/'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='https://twitter.com/?lang=fr'><i className="fa-brands fa-twitter"></i></a>
                  <a href='https://www.instagram.com/?hl=fr'><i className="fa-brands fa-instagram"></i></a>
                  <a href='https://www.tiktok.com/fr/'><i className="fa-brands fa-tiktok"></i></a>
                  </div>
              </article>
          </div>
        </div>
    );
};

// disabled={ loading || currentUser}
export default Login;