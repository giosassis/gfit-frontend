import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EmailVerification() {
  const { email, token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyAndConfirmEmail() {
      try {
        const verifyResponse = await fetch(
          `https://localhost:7187/api/EmailConfirmation/confirm?email=${encodeURIComponent(
            email
          )}&token=${encodeURIComponent(token)}`
        );
        console.log(verifyResponse, email, token);

        if (verifyResponse.ok) {
          const confirmResponse = await fetch(
            `https://localhost:7187/api/EmailConfirmation/confirm?email=${encodeURIComponent(
              email
            )}&token=${encodeURIComponent(token)}`
          );

          if (confirmResponse.ok) {
            navigate("/confirmacao");
          }
        }
      } catch (error) {
        console.error("Erro ao verificar/confirmar e-mail", error);
      } finally {
        setIsLoading(false);
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
