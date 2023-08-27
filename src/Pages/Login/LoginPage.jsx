import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7187/api/Auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        // Armazenar o token no localStorage ou sessionStorage
        localStorage.setItem('token', token);
        // Redirecionar para outra página após o login
        window.location.href = '/dashboard'; // Substitua pela rota desejada
      } else {
        // Lidar com o erro de autenticação
      }
    } catch (error) {
      setErrorMessage('Credenciais inválidas. Verifique seu email e senha.');
      console.error('Erro ao realizar login:', error.data);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <Link to="/solicitar-redefinir-senha">Esqueci minha senha</Link>  
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;
