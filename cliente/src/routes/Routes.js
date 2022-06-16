import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";
import Index from "../pages";
import EditOrder from "../pages/EditOrder";

const Router = () => {
  return (
    <BrowserRouter>
      <DrawerMenu />
      <Routes>
        <Route index element={<Index />} />
        <Route exact path="/alterar-pedido" element={<EditOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
