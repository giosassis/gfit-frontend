import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function NovaSenha() {
  const { token } = useParams(); // Obter o token da URL
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      if (newPassword !== confirmPassword) {
        setErrorMessage("As senhas não coincidem.");
        return;
      }

      const response = await axios.post(
        `https://localhost:7187/api/Auth/reset-password`,
        {
          email,
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Senha redefinida com sucesso.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Ocorreu um erro ao redefinir a senha.");
    }
  };

  return (
    <div>
      <h1>Redefinir Senha</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Nova Senha"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar Nova Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Redefinir Senha</button>
    </div>
  );
}

export default NovaSenha;
