import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import DrawerMenu from "../components/DrawerMenu";
import Index from "../pages";
import EditOrder from "../pages/EditOrder";
import HistoryOrder from "../pages/HistoryOrder";

const Router = () => {
  return (
    <BrowserRouter>
      <DrawerMenu />
      <Routes>
        <Route index element={<Index />} />
        <Route exact path="/historico-pedidos" element={<HistoryOrder />} />
        <Route exact path="/alterar-pedido/:id" element={<EditOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
