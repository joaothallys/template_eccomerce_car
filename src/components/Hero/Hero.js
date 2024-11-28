import React from 'react';
import './Hero.style.css';
import { SearchCar } from '../SearchCar/SearchCar';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';

export const Hero = () => {
    const theme = useSelector((state) => state.theme.value);
    console.log(theme);
    return (
        <>
            <Header />
            <section id="hero" className="hero">
                <div className="hero__container">
                    <div className="hero__txt">
                        <h2 style={{ color: theme }}>
                            Encontre o carro dos seus sonhos por um preço que cabe no seu bolso
                        </h2>
                        <p style={{ color: theme }}>
                            Compre ou venda carros de forma rápida, segura e confiável. Busque o modelo, marca e ano que você procura, e faça um ótimo negócio com a gente.
                        </p>
                        <button 
                            style={{ background: theme }} 
                            className="hero__btn" 
                            onClick={() => window.location.href = '#'}
                        >
                            Encontre seu carro agora
                        </button>
                    </div>
                </div>
                <SearchCar />
            </section>
        </>
    );
};
