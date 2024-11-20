import React from 'react'
import './Services.style.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import SvgIcon from '@mui/material/SvgIcon';

export const Services = () => {

  const services = [{ title: "largest dealership", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: DirectionsCarIcon }, { title: "unlimited repair warrenty", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: LocalShippingIcon }, { title: "insurence support", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: LocalCarWashIcon }]

  const Service = ({ service }) => {
    return (
      <div class="single-service-item">
        <div class="single-service-icon">
        <SvgIcon component={service.image}/>
        </div>
        <h2><a href="#">{service.title}</a></h2>
        <p>
          {service.pretitle}
        </p>
      </div>
    )

  }
  return (
    <section id="service" class="service">
      <div class="service__container">
        <div class="service__title">
          <h2>get your desired car in resonable price</h2>
        </div>
        <div class="service__content">
          {services.map((service) => (
            <Service service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const API_URL = 'https://compara-e-venda-de-veiculos.onrender.com/anuncio/listar';

export const fetchCars = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzcHJpbmctc2VjdXJpdHktand0Iiwic3ViIjoia2Fpa2VAZXhhbXBsZS5jb20iLCJleHAiOjE3MzIxMTgzODYsImlhdCI6MTczMjExNTM4Niwic2NvcGUiOiJVU0VSIn0.do6nN7eL1IGD18wPvi_umsLZgUMGI-3Kme6bXIM3F9wZ-UVI0MtBryKpDz9eGQjki7sp_bhXa2tSTVFDfVpm5ADFCTi9qHONCnD8o95-5ff62yGSXk0NjrKhZ3AogiFDM_LpSPswCAwywkybXeC4ckySz9ioCcy3JGh0Mlvwr90tym20Fc5FyQbddsqO2Pw8-1vRSs1ekZiFdSX0Gd8eMm9mmigawd4l9yb53Ny0WohKoTD1Ajnn1cX8Ws1MPAhaRvk02TkuN_IPnY_MeoGT64nj3s9nnpsQeCxEM_Qxgrd1KxNWyZWVX-hM14zDe-n7ZsIqafPIdn7keLnGa-aFGA`, // Adicionando o token no cabeçalho
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