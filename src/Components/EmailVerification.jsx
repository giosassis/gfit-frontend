import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailVerificationService from '../Service/emailVerificationService';

function EmailVerification() {
  const { email, token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyAndConfirmEmail() {
      const verificationResult = await emailVerificationService.verifyAndConfirmEmail(email, token);

      setIsLoading(false);

      if (verificationResult) {
        navigate('/confirmacao');
      }
    }

    verifyAndConfirmEmail();
  }, [email, token, navigate]);

  if (isLoading) {
    return <p>Verificando token...</p>;
  }

  return <p>Token inválido ou confirmação falhou.</p>;
}

export default EmailVerification;
