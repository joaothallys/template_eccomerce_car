import React, { useEffect, useState } from 'react';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';
import { fetchCars } from '../Services/apiServices'; // Importando o serviço

export const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  const FeaturedCar = ({ car }) => {
    const { veiculo, preco, usuarioVendedor } = car;

    return (
      <Box>
        <div className="featured-car">
          <div className="featured-car__box">
            <div className="featured-car__img">
              <img
                src={veiculo.fileUrl || 'default-placeholder.png'}
                alt={veiculo.modelo}
              />
            </div>
            <div className="featured-car__info">
              <p>
                {veiculo.ano}
                <span className="featured-car__mi-span"> {veiculo.quilometragem} km</span>
                <span className="featured-car__hp-span"> {veiculo.potencia}HP</span> {veiculo.cambio}
              </p>
            </div>
          </div>
          <div className="featured-car__txt">
            <h2>
              <a href="#">{veiculo.modelo}</a>
            </h2>
            <h3>R$ {parseFloat(preco).toFixed(2)}</h3>
            <p>
              Vendedor: {usuarioVendedor.nome} - {usuarioVendedor.telefone}
            </p>
            <p>{veiculo.caracteristicasEspecificas}</p>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <section id="featured-cars" className="featured-cars">
      <div className="featured-cars__container">
        <div className="featured-cars__header">
          <h2>
            Checkout <span>the</span> featured cars
          </h2>
          <p>Carros em destaque</p>
        </div>
        <div className="featured-cars__content">
          <Box sx={{ width: 1 }}>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            {!loading && !error && cars.length === 0 && (
              <p>Nenhum carro disponível no momento.</p>
            )}
            {!loading && !error && (
              <Box className="feature-car__grid" display="grid" gap={2}>
                {cars.map((car) => (
                  <FeaturedCar key={car.id} car={car} />
                ))}
              </Box>
            )}
          </Box>
        </div>
      </div>
    </section>
  );
};
