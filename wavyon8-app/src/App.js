import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ShoppingPage from "./pages/ShoppingPage";
import CartProvider from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

import Events from "./pages/EventsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FeaturedProduct from "./pages/featuredProductPage";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />

          <Nav />
          <Routes>
            <Route exact path="/" exact element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/shop" element={<ShoppingPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/product" element={<FeaturedProduct />} />
            {/*
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
