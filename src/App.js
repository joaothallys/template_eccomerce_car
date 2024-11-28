import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router
import { Hero } from './components/Hero/Hero';
import { Services } from './components/Services/apiServices';
import { NewCars } from './components/NewCars/NewCars';
import { FeaturedCars } from './components/FeaturedCars/FeaturedCars';
import { Reviews } from './components/Reviews/Reviews';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/login/Login';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          {/* Rota principal: exibe todos os componentes juntos */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <NewCars />
              <FeaturedCars />
              <Reviews />
            </>
          } />

          {/* Rota de Login */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* O Footer será exibido em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
