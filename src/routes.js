import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PersonalRegistrationPage from "./Pages/PersonalRegistration";
import Personal from "./Pages/Personal";
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
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;