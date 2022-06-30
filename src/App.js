
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide';
import Club from './pages/Club';
import Galerie from './pages/Galerie';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './css/all.css';



const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Slide />}></Route>
          <Route path='/Club' element={<Club />} />
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Galerie' element={<Galerie />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;