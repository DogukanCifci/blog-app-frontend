import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import PrivateRouter from "./PrivateRouter";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
