import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Home from "../home/Home";
import Inicio from "../inicioN/Inicio";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/inicio" element={<Inicio />} />

      </Routes>
    </BrowserRouter>
  );
};
