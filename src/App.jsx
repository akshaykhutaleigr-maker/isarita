import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";
import Login from "./Components/Login/Login";
import CitizenRegister from "./Components/Register/CitizenRegister";
import Welcome from "./Components/Welcome/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />

      {/* Routes must wrap Route components */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<CitizenRegister />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>

      <Partners />
      <Footer />
    </>
  );
}

export default App;
