import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Manage.css'; // Importe o arquivo CSS

// Dados fictícios
const vehicles = [
    { id: 1, model: 'Tesla Model 3', year: '2022', price: '35000' },
    { id: 2, model: 'Ford Mustang', year: '2021', price: '45000' },
    { id: 3, model: 'Chevrolet Camaro', year: '2020', price: '40000' }
];

// Componente para exibir a lista de veículos
const VehicleList = () => {
    return (
        <div className="vehicle-list">
            {vehicles.map((vehicle) => (
                <div className="vehicle-item" key={vehicle.id}>
                    <div className="vehicle-details">
                        <p className="vehicle-model">{vehicle.model}</p>
                        <p className="vehicle-year">{vehicle.year}</p>
                        <span className="vehicle-price">${vehicle.price}</span>
                    </div>
                    <div className="vehicle-actions">
                        <Link to={`/edit/${vehicle.id}`}>
                            <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button className="btn btn-remove">Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Componente da página inicial (Home)
const Home = ({ onAddVehicle }) => {
    return (
        <div className="home-container">
            <h3 className="home-title">CRUD de veículo</h3>
            <div className="home-actions">
                <div className="home-action-left">
                    <h5 className="home-subtitle">Vehicle Listing</h5>
                </div>
                <div className="home-action-right">
                    <button className="btn btn-add" onClick={onAddVehicle}>Adicionar veiculo</button>
                </div>
            </div>
            <VehicleList />
        </div>
    );
};

// Componente de adicionar veículo
const AddVehicleModal = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        marca: '',
        modelo: '',
        ano: '',
        preco: '',
        cor: '',
        tipoCombustivel: '',
        quilometragem: '',
        tipoVeiculo: '',
        cambio: '',
        potencia: '',
        quantidadePortas: '',
        caracteristicasEspecificas: '',
        usuario: { id: 2 },
        imagem: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, imagem: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className="modal-title">Adicionar veiculo</h2>
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-grid">
                        <input type="text" name="marca" placeholder="Marca" className="form-input" onChange={handleChange} />
                        <input type="text" name="modelo" placeholder="Modelo" className="form-input" onChange={handleChange} />
                        <input type="number" name="ano" placeholder="Ano" className="form-input" onChange={handleChange} />
                        <input type="text" name="preco" placeholder="Preço" className="form-input" onChange={handleChange} />
                        <input type="text" name="cor" placeholder="Cor" className="form-input" onChange={handleChange} />
                        <input type="text" name="tipoCombustivel" placeholder="Tipo de Combustível" className="form-input" onChange={handleChange} />
                        <input type="number" name="quilometragem" placeholder="Quilometragem" className="form-input" onChange={handleChange} />
                        <input type="text" name="tipoVeiculo" placeholder="Tipo de Veículo" className="form-input" onChange={handleChange} />
                        <input type="text" name="cambio" placeholder="Câmbio" className="form-input" onChange={handleChange} />
                        <input type="number" name="potencia" placeholder="Potência" className="form-input" onChange={handleChange} />
                        <input type="number" name="quantidadePortas" placeholder="Quantidade de Portas" className="form-input" onChange={handleChange} />
                        <input type="text" name="caracteristicasEspecificas" placeholder="Características Específicas" className="form-input" onChange={handleChange} />
                        <input type="file" name="imagem" className="form-input" onChange={handleFileChange} />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn btn-cancel" onClick={onClose}>Cancel</button>
                        <button type="submit" className="btn btn-submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Definição do componente Manage
const Manage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddVehicle = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveVehicle = (vehicle) => {
        console.log('Vehicle saved:', vehicle);
        // Aqui você pode adicionar a lógica para salvar o veículo
    };

    return (
        <div className="manage-container">
            <Home onAddVehicle={handleAddVehicle} />
            {showModal && <AddVehicleModal onClose={handleCloseModal} onSave={handleSaveVehicle} />}
        </div>
    );
};

// Exportação do componente Manage
export default Manage;