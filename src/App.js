
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide';
import Club from './pages/Club';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Galerie from './pages/Galerie';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Ecole from './pages/Ecole';
import Kayak from './pages/Kayak';
import Panier from './pages/Panier';
import './css/all.css';
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"



const App = () => {
  const [userName, setUserName] = useState("");
  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);

      } else setUserName("");
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Slide />}></Route>
          <Route path='/Club' element={<Club />} />
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Profil' element={<Profil />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/Ecole' element={<Ecole />}></Route>
          <Route path='/Kayak' element={<Kayak />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Galerie' element={<Galerie />}></Route>
          <Route path='/Panier' element={<Panier />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;