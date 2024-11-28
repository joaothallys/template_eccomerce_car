import React, { useState } from 'react';
import './Login.style.css'; // Estilo da tela de login

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        console.log("Login com", email, password);
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
                <button type="submit" className="login__btn">Entrar</button>
            </form>
        </div>
    );
};
