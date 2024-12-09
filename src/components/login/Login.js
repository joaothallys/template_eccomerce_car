import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.style.css'; // Estilo da tela de login
import { loginUser } from '../Services/apiServices'; // Importe o serviço de autenticação

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem('authToken', data.AccessToken); // Armazena o token no localStorage
                localStorage.setItem('password', password);
                localStorage.setItem('nome', data.nome); // Armazena a senha no localStorage
                navigate('/manage');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
};