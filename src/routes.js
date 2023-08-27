import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PersonalRegistrationPage from "./Pages/PersonalRegistration";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import Personal from "./Pages/Personal";
import RedefinePassword from "./Pages/RedefinePassword/RedefinePassword";
import NewPassword from "./Pages/RedefinePassword/NewPassword";
import ConfirmationPage from "./Pages/ConfirmationPage";
import EmailVerification from "./Components/EmailVerification.jsx";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-personal" element={<PersonalRegistrationPage />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/confirmacao/:email/:token" element={<EmailVerification />} />
        <Route path="/confirmacao" element={<ConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/solicitar-redefinir-senha" element={<RedefinePassword />} />
        <Route path="/redefinir-senha/:token" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;