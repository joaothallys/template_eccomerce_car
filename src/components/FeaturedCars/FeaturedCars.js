import React, { useEffect, useState } from 'react';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { fetchCars } from '../Services/apiServices';
import { fetchVeiculoById } from '../Services/veiculosService'; // Importando o serviço

export const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null); // Detalhes do veículo selecionado
  const [modalLoading, setModalLoading] = useState(false);

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

  const openModal = async (id) => {
    setModalLoading(true);
    setModalOpen(true);
    try {
      const carDetails = await fetchVeiculoById(id); // Busca os detalhes do veículo
      setSelectedCar(carDetails);
    } catch (err) {
      setError(err.message);
    } finally {
      setModalLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCar(null);
  };

  const FeaturedCar = ({ car }) => {
    const { veiculo, preco } = car;

    return (
      <Box onClick={() => openModal(veiculo.id)} className="featured-car-card"> {/* Adiciona evento de clique */}
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
            <p>{veiculo.caracteristicasEspecificas}</p>
          </div>
        </div>
      </Box>
    );
  };

  const handleWhatsAppClick = (telefone) => {
    const cleanedPhone = telefone.replace(/\D/g, ''); // Remove caracteres especiais
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanedPhone}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="featured-cars" className="featured-cars">
      <div className="featured-cars__container">
        <div className="featured-cars__header">
          <h2>
            Confira <span>os</span> carros em destaque
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

      {/* Modal para exibir os detalhes do veículo */}
      <Modal open={modalOpen} onClose={closeModal}>
        <Box className="modal-container">
          {modalLoading ? (
            <CircularProgress />
          ) : selectedCar ? (
            <div className="car-details">
              <img src={selectedCar.fileUrl || 'default-placeholder.png'} alt={selectedCar.modelo} />
              <h2>{selectedCar.modelo}</h2>
              <p>
                <strong>Preço:</strong> R$ {parseFloat(selectedCar.preco).toFixed(2)}
              </p>
              <p>
                <strong>Cor:</strong> {selectedCar.cor}
              </p>
              <p>
                <strong>Combustível:</strong> {selectedCar.tipoCombustivel}
              </p>
              <p>
                <strong>Quilometragem:</strong> {selectedCar.quilometragem} km
              </p>
              <p>
                <strong>Características:</strong> {selectedCar.caracteristicasEspecificas}
              </p>
              {selectedCar.usuario && (
                <p>
                  <strong>Vendedor:</strong> {selectedCar.usuario.nome} - {selectedCar.usuario.telefone}
                  <WhatsAppIcon
                    style={{ cursor: 'pointer', marginLeft: '10px', color: '#25D366' }} // Define a cor verde
                    onClick={() => handleWhatsAppClick(selectedCar.usuario.telefone)}
                  />
                </p>
              )}
            </div>
          ) : (
            <p>Carregando detalhes...</p>
          )}
        </Box>
      </Modal>
    </section>
  );
};