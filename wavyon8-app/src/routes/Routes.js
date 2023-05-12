import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturedProduct from "../components/Shop/FeaturedProduct";
import AboutUsPage from "../pages/About/AboutUsPage";
import ContactPage from "../pages/Contact/ContactPage";
import Events from "../pages/Events/EventsPage";
import Homepage from "../pages/Homepage/Homepage";
import ShoppingPage from "../pages/Shop/ShoppingPage";

function RoutesConfig() {
  return (
    <>
      <Routes>
        <Route exact path="/" exact element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default RoutesConfig;
