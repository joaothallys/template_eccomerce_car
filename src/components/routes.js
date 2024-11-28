import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Login } from './components/Login/Login';

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Hero />} />
        
        {/* Rota para a página de login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
