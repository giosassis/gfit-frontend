import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PersonalRegistrationPage from "./Pages/PersonalRegistration";
import Personal from "./Pages/Personal";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-personal" element={<PersonalRegistrationPage />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
