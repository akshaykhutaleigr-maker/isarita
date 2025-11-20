import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Registerform from "./Components/Register/Registerform";
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";
import Partners from "./Components/Partners/Partners";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registerform />} />
        {/* Add more routes here if needed */}
      </Routes>
      <Partners />
      <Footer />
    </>
  );
}

export default App;
