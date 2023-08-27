import React, { useState } from "react";
import resetPasswordService from "../../Service/resetPasswordService";
import { useParams } from "react-router-dom";

function NovaSenha() {
  const { token } = useParams();
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

      const resetResult = await resetPasswordService.resetPassword(email, token, newPassword);

      if (resetResult) {
        setSuccessMessage("Senha redefinida com sucesso.");
      } else {
        setErrorMessage("Ocorreu um erro ao redefinir a senha.");
      }
    } catch (error) {
      console.error(error);
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
