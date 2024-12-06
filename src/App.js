import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importando React Router

// Componentes principais
import { Hero } from './components/Hero/Hero'; // Hero como exportação nomeada
import { Services } from './components/Services/apiServices';  // Services como exportação nomeada
import { NewCars } from './components/NewCars/NewCars';  // NewCars como exportação nomeada
import { FeaturedCars } from './components/FeaturedCars/FeaturedCars';  // FeaturedCars como exportação nomeada
import { Reviews } from './components/Reviews/Reviews';  // Reviews como exportação nomeada
import { Footer } from './components/Footer/Footer';  // Footer como exportação nomeada
import { Login } from './components/login/Login';  // Login como exportação nomeada
import Manage from './components/manage/Manage'; // Manage como exportação nomeada

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

          {/* Rota de Gerenciamento de Veículos */}
          <Route path="/manage" element={<Manage />} />
        </Routes>

        {/* O Footer será exibido em todas as páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
