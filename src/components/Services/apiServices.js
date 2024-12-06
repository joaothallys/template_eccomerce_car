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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzcHJpbmctc2VjdXJpdHktand0Iiwic3ViIjoia2Fpa2VAZXhhbXBsZS5jb20iLCJleHAiOjQzMjUyMzY0OTMsImlhdCI6MTczMzIzNjQ5Mywic2NvcGUiOiJVU0VSIn0.iUWYYoVJvhS0GX1hN1arRwgC6-5IuNmtbkVE-VOzD-mR-pjpY0o5ejmZGSSUsGigJKx29zf9fvBlETTyGBzmiyVFyd-dojfQ-zoPc1YIKktFk04uaEVEOk2ilahq2_R8XMSPdy76A4xAH38oQ9wZLruQ1N1BCqsxNK3xgC1jdmbwn1-FcYyp8NcUoJ-rfx7KQPknWPHsO5HGaidNfShrtaGn85pn1bnFJZIaxKAJY5f0BYWzrZHxT9Xjzy3a-ckjd8GDIIg4ABtaufuGbb33H6sjow159OphGpOdDtyAAinWcTBfjzEGHw8RUricjw_ERRpVmmnWo4ru4n-ITkISqQ`,
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