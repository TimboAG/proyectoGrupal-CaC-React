import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
