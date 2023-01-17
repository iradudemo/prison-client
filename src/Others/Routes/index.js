import React from "react";
import { Routes, Route } from "react-router-dom";
import View from "../views/view";
import Login from "../components/login";
import Register from "../components/register";

import Home from "../views/home";
import Payment from "../components/payment";

import SwipeableEdgeDrawer from "../components/drowerMessage";
function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<View />} />
        <Route path="/sendmoney" element={<Payment />} />
        <Route path="/drawer" element={<SwipeableEdgeDrawer />} />
      </Routes>
    </div>
  );
}

export default Index;
