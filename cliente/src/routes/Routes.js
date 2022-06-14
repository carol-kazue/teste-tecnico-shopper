import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Index from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
