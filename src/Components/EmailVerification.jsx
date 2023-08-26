import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EmailVerification () {
  const { email, token } = useParams();
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken() {
      try {
        const response = await fetch(`https://localhost:7187/api/EmailConfirmation/verify?email=${email}&token=${token}`);
        if (response.ok) {
          const data = await response.json();
          setIsTokenValid(data.isTokenValid);
        } else {
          console.error('Erro ao verificar token');
        }
      } catch (error) {
        console.error('Erro ao verificar token', error);
      } finally {
        setIsLoading(false);
      }
    }

    verifyToken();
  }, [email, token]);

  useEffect(() => {
    async function confirmEmail() {
      if (isTokenValid) {
        try {
          const response = await fetch(`https://localhost:7187/api/EmailConfirmation/confirm?email=${email}&token=${token}`);
          if (response.ok) {
            setIsConfirmed(true);
          } else {
            console.error('Erro ao confirmar e-mail');
          }
        } catch (error) {
          console.error('Erro ao confirmar e-mail', error);
        }
      }
    }

    confirmEmail();
  }, [email, isTokenValid, token]);

  useEffect(() => {
    if (isTokenValid && isConfirmed) {
      navigate('/confirmacao');
    }
  }, [isTokenValid, isConfirmed, navigate]);

  if (isLoading) {
    return <p>Verificando token...</p>;
  }

  return <p>Token inválido ou confirmação falhou.</p>;
};

export default EmailVerification;
