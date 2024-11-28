import React from 'react';
import './NewCars.style.css';
import Carousel from 'react-material-ui-carousel';
import car1 from '../assets/ncm1.png'; // Substituir por imagens reais de carros
import car2 from '../assets/ncm2.png';
import car3 from '../assets/ncm3.png';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

export const NewCars = () => {
  const newCars = [
    {
      title: "Fipe baixo, financiamento facilitado",
      pretitle: "Compre seu carro com as melhores condições do mercado e entrega rápida. Financiamento fácil e parcelado.",
      image: car1
    },
    {
      title: "Carro revisado e pronto para rodar",
      pretitle: "Veículos 100% revisados, com garantia estendida. Aproveite nossa oferta de revisões gratuitas.",
      image: car2
    },
    {
      title: "Carro com IPVA pago e documentação em dia",
      pretitle: "Compre com segurança, toda documentação do carro regularizada. Evite surpresas com nossos veículos revisados.",
      image: car3
    }
  ];

  const theme = useSelector((state) => state.theme.value);

  const Cars = ({ car }) => {
    return (
      <div className="car">
        <div className="car__icon">
          <img src={car.image} alt="Carro" />
        </div>
        <div className="car__text">
          <h2><a href="#">{car.title}</a></h2>
          <p>{car.pretitle}</p>
        </div>
      </div>
    );
  };

  return (
    <section style={{ background: theme }} id="cars" className="cars">
      <div className="cars__container">
        <div className="cars__content">
          <Carousel>
            {newCars.map((car, index) => (
              <Cars key={index} car={car} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
