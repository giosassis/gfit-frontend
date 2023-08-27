import React, { useState } from 'react';
import axios from 'axios';

function RedefinePassword() {
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('https://localhost:7187/api/Auth/request-password-reset', {
        email,
      });

      if (response.status === 200) {
        setResetRequested(true);
      }
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <h1>Redefinir Senha</h1>
      {!resetRequested ? (
        <>
          <p>Insira seu email para redefinir sua senha.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleResetPassword}>Enviar</button>
        </>
      ) : (
        <p>Um link de redefinição de senha foi enviado para o seu email.</p>
      )}
    </div>
  );
}

export default RedefinePassword;
