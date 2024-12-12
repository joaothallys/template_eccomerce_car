import React from 'react';
import './Services.style.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import SvgIcon from '@mui/material/SvgIcon';

export const Services = () => {

  const services = [
    { 
      title: "Maior concessionária", 
      pretitle: "Ninguém despreza, odeia ou foge do próprio prazer porque é prazer, mas porque.", 
      image: DirectionsCarIcon 
    },
    { 
      title: "Garantia de reparo ilimitada", 
      pretitle: "Ninguém ama a dor em si, que a busca e quer tê-la, simplesmente porque é dor.", 
      image: LocalShippingIcon 
    },
    { 
      title: "Suporte de seguro", 
      pretitle: "Ninguém ama a dor em si, que a busca e quer tê-la, simplesmente porque é dor.", 
      image: LocalCarWashIcon 
    }
  ];

  const Service = ({ service }) => {
    return (
      <div className="single-service-item">
        <div className="single-service-icon">
          <SvgIcon component={service.image} />
        </div>
        <h2><a href="#">{service.title}</a></h2>
        <p>
          {service.pretitle}
        </p>
      </div>
    );
  };

  return (
    <section id="service" className="service">
      <div className="service__container">
        <div className="service__title">
          <h2>Obtenha o carro desejado por um preço razoável</h2>
        </div>
        <div className="service__content">
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const API_URL = 'https://compara-e-venda-de-veiculos.onrender.com/anuncio/listar';

export const fetchCars = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzcHJpbmctc2VjdXJpdHktand0Iiwic3ViIjoia2Fpa2VAZXhhbXBsZS5jb20iLCJleHAiOjQzMjQ4OTg1MzksImlhdCI6MTczMjg5ODUzOSwic2NvcGUiOiJVU0VSIn0.V1ddE-eXRhq00OiPmu_d53NGpxTaJVZKpg7n4kfu-rlW07lwrMAfHdimcu_X2biDQwgCMwylOhbqMuExtgwQV43KiCx72ZvRQWSDLXgyYjRo0SRwJ2YfI_J8rldyMVp6rtfi4P3eN1X0BeimSQBanJ8GdA5-TDTnvq8COwl-KOtNWXhICvLyAYTSXf5SgFdmpTnseUl3PTwMTW7NTGBUxWPLdM0oz-lpLHhP0y8L6OhmP7QQ3ABgpAuTLvsRoBnmEiUIM-5PH7Gm6AKHGGmZlJkf3KGFuQ4SIA3wo9I82viSXfUR8Qz9BWNKGuBuCYMxA9yRdWVNcevZ2k-8XK32Zg`,
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados da API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// services/authService.js
export const loginUser = async (email, password) => {
  const response = await fetch('https://compara-e-venda-de-veiculos.onrender.com/login/auth/user', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha: password }),
  });

  return response;
};