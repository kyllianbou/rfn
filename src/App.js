
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Quisommenous from './pages/Quisommenous';
import Activiter from './pages/Activiter';
import Projet from './pages/Projet';
import Don from './pages/Don';
import Contact from './pages/Contact';
import Actualiter from './pages/Actualiter';
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
