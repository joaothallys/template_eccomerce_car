import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import './Login.style.css'; // Estilo da tela de login
import { loginUser } from '../Services/apiServices'; // Importe o serviço de autenticação

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await loginUser(email, password);
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('authToken', data.AccessToken); // Armazena o token no localStorage
                localStorage.setItem('password', password);
                localStorage.setItem('nome', data.nome);
                localStorage.setItem('id', data.id);
                navigate('/manage');
            } else if (response.status === 401) {
                setErrorMessage('Senha inválida. Tente novamente.');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login__container">
            <form onSubmit={handleLogin} className="login__form">
                <div className="form__group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        required
                    />
                </div>
                <div className="form__group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Login'}
                </button>
            </form>
        </div>
    );
};