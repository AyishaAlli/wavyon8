import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUsPage from "../pages/About/AboutUsPage";
import ContactPage from "../pages/Contact/ContactPage";
import Events from "../pages/Events/EventsPage";
import Homepage from "../pages/Homepage/Homepage";
import FeaturedProductPage from "../pages/Shop/featuredProductPage";
import ShoppingPage from "../pages/Shop/ShoppingPage";
import CartPage from "../pages/Shop/CartPage";

function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop/:id" element={<FeaturedProductPage />} />
      </Routes>
    </>
  );
}

export default RoutesConfig;
