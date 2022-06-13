
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slide from './pages/Acceuil';
import Club from './pages/Quisommenous';
import Login from './pages/Activiter';
import Profil from './pages/Projet';
import Galerie from './pages/Don';
import Services from './pages/Contact';
import Contact from './pages/Actualiter';
import './css/all.css';



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Acceuil' element={<Acceuil />}></Route>
          <Route path='/Quisommenous ' element={<Quisommenous />} />
          <Route path='/Activiter' element={<Activiter />}></Route>
          <Route path='/Projet' element={<Projet />}></Route>
          <Route path='/Don' element={<Don />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Actualiter' element={<Actualiter />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
