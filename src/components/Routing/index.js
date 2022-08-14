import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Content from "../Content";
import Contents from "../Contents";
import Homepage from "../Homepage";
import ProdectDetail from "../ProductDetail";
import Welcome from "../Welcome";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
        <Route index element={<Navigate to="welcome" />} />
            <Route index path="welcome" element={<Welcome />} />
          {/* <Route index element={<Navigate to="mystore" />} /> */}
          <Route path="mystore" element={<Contents />}>
            
            <Route path="products">
              <Route path=":category" element={<Content />} />
              <Route path="" element={<Content />} />
            </Route>
          </Route>
         
          <Route path="products/:id" element={<ProdectDetail />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
